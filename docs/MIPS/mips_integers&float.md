# **MIPS INteger and Floating Point Numbers**
## **Integer Handling**

Unlike NASM where numbers are stored as characters, MIPS can store single or multiple digit
integers directly. This chapter describes how to read and print integers. Basic operations in integer
handling (add, sub, mul, div) will also be covered.

**1. Declaring an integer**

Integers can be declared as constants in the ‘.data’ section as shown below:

*Code to declare constants ‘x’ and ‘y’ with values 30 and 40 respectively:*

```v
.data 
x: .word 30 
y: .word 40
```

**2. Loading an integer value into a register**

Another way of using integers in MIPS is to read their values into temporary registers
using ‘I’ type instructions.
The two commonly used methods of reading integer values are:

1. Loading a value into a temporary register.
2. Adding the value of the zero register and any value into a temporary register.

*Code to enter integer values 5 and 10 using add and load instructions respectively into temporary
registers:*
```v
.text 
addi  $t0, $0, 5 
li $t1, 10
```
**3. Reading integers as input from the user**

Integers can be read from the user using _syscall_ (system call) instructions.
The system call code for reading an integer is ‘5’. This syscall code value must be
loaded into the register $v0 in order to perform its designated function. The input is
then stored in $v0.

_Code to read an integer input from the user:_
```v
.text 
li $v0, 5 
syscall
```
**4. Printing integers**

Integers stored in registers can also be printed using syscall instructions. The system call
code for printing an integer is ‘1’. This syscall code value must be loaded into the
register $v0 in order to perform its designated function. The integer to be printed must
be stored in the $a0 register.

_Code to print the integer ‘5’ after storing it in a register:_
```v
.text 
li $a0, 5 
li $v0, 1 
syscall
```
We have now learnt how to store single and multi digit integers and how to print their
values. We shall now combine all of these into a single program for a more robust
understanding of the covered concepts.

_Code to declare a constant x with value 10, load values 20 and 30 into two registers and read
an integer value from the user and print all these values:_

```asm
.data 
x: .word 10 
.text 
addi $t0, $0, 20   #load value 20 
li $t1, 30    #load value 30 
li $v0, 5     #read integer input
syscall 
move  $t2, $v0   #move integer input 
lw $a0, x     #print x 
li $v0, 1 
syscall 
move $a0, $t0    
li $v0, 1     #print value of $t0  
syscall    
move $a0, $t1   #print value of $t1 
li $v0, 1 
syscall 
move $a0, $t2   #print integer input 
li $v0, 1 
syscall 
li $v0, 10    #exit program 
syscall
```

_Output:_
_Assume the value ‘5’ is entered by the user as input._
```asm
5
1020305
-- program is finished running --
```

**5. Adding integers**

Integers can be added in two ways, either by adding fixed or immediate values to an
integer value stored in a register, or by adding two integers that are both stored in registers.
Both methods to add integers are demonstrated below:

_Code to add integer values stored in registers:_
```asm
.text 
addi  $t0, $t1, 5   #t0=t1+5  
add $t2, $t2, $t1   #t2=t2+t1 
addi  $t1, $zero, 5   #t1=0+5 
add   $t2, $zero, $t1    #t2=0+t1  
```

**6. Subtracting integers**

Unlike addition, values can only be subtracted if they are stored in a register.

_Code to subtract integer values stored in registers:_
```asm
.text 
sub $t2, $t2, $t1   #t2=t2-t1    
sub   $t2, $zero, $t1    #t2=0-t1
```
**7. Multiplying integers**

MIPS allows you to multiply the values present in two registers and stores the 32 most
significant bits in the HI special register and the 32 least significant bits in the LO special
register.

The value obtained in the HI and LO registers can be accessed using the mfhi and mflo
instructions respectively.

_Code to multiply two integers values and access the result after multiplication:_
```asm
.text 
mult  $t0, $t1     #signed mult 
mflo  $s0     #s0=t0*t1 
multu $t2, $t3    #unsigned mult  
mflo  $s1     #s1=t2*t3 
```

**8. Dividing integers**

Division in MIPS is similar to multiplication except for a key difference, the HI special
register stores the remainder while the LO special register will hold the quotient of the
division.

_Code to divide to integers and access the remainder and quotient after division:_

```asm
.text 
div $t1, $t2    #signed div 
mfhi  $s0     #s0=t1%t2 
mflo  $s1     #s1=t1/t2 
divu  $t3, $t4    #unsigned div 
mfhi  $s2     #s2=t3%t4 
mflo  $s3      #s3=t3/t4 
```

### **Points To Note**

**1.** Entering number of size larger than 32 bits
The largest integer that can be entered in 32 bit space is 2,147,483,647. Entering a
number larger than that results in the following error:  

```
Runtime exception at 0x0040002c: invalid integer input (syscall 5)
```

**2.** Changing the value of $zero register
    It is not possible to change the value of the $zero register, any instructions that attempt
    to alter the value have no effect.  

**3.** Multiplying numbers of size 32 bits
    In MIPS, all integer values must be 32 bits. So if there is a valid answer, it must be
    contained in the lower 32 bits of the answer. Thus to implement multiplication in MIPS,
    the two numbers must be multiplied using the mult operator, and the valid result moved
    from the lo register.  

**4.** Division by zero
    If the divisor is zero, then the MIPS divide instructions do not compute any result in the
    HI and LO registers. Division by zero is ignored and no exception is produced.  

**5.** Meaning of the _.word_ directive
The _.word_ directive allocates 4 bytes of space in the data region. The .word directive can
then be given an integer value, and it will initialize the allocated space to that integer
value. Be careful as it is incorrect to think of a the .word directive as a declaration for an
integer, as this directive simply allocates and initializes 4 bytes of memory, it is not a
data type. What is stored in this memory can be any type of data.

## **Floating Point Numbers**

Floating point numbers are stored according to the IEEE 754 Standard. There are 2 types
of floating point numbers, single precision and double precision.

### **Floating point number representation**

According to IEE 754 Standard, floating point numbers follow the given representation.

```Sign Exponent Fraction```

- The sign bit is 0 or 1, for positive or negative respectively.

- The exponent stores the exponent of the number in scientific notation of its binary
representation, plus a bias.

- The fraction stores the fractional part of the binary representation of the number.


| Data | Single Precision | Double Precision |
|----|----|----|
|Size | 32 bits | 64 bits |
|Exponent size | 8 bits | 11 bits |
|Fraction size | 23 bits|  52 bits |
|Bias |127| 1023|

<u>Note</u>

- Since there are some numbers with non-ending decimal part in there binary representation
    ( For Example- ( 1 /3) 10 = (0.01 0011 0011 0011 ....) 2 ) and we have only limited bits to store
    the fraction part, there will be some slight inaccuracy while storing certain floating point
    numbers. Therefore, it is recommended to always use double, as it has a higher precision due
    to its increased no. of bits.

### **MIPS floating point architecture**

In MIPS, all floating point calculations are computed in a separate processor, called co-
processor 1.

The coprocessor contains 32 floating point registers, each of width 32 bits. The registers
are numbered from $f 0 to $f3 1.

Each register is can store a single precision floating point number, while double precision is
stored in 2 registers in an even-odd pair. For instructions concerning double precision numbers, the
even numbered register is used in the instruction. Using an odd numbered register will throw an
error.

In addition to the registers, there are 8 condition flags, which are used in floating point
compare and branch instructions.


#### **Floating point registers in MIPS**

|Registers | Usage |
|---|---|
|$f0 - $f3 | Used for results of floating point procedures |
| $f4 - $f11 | Temporary floating point registers, whose values are NOT preserved across procedure calls|
|$f12 - $f15 | Floating point parameters, whose values are NOT preserved across procedure calls |
| $f16 - $f19 | More temporary floating point registers, whose values are NOT preserved across procedure calls |
|$f20 - $f31 | Saved floating point registers, whose values are preserved across procedure calls |

Among the 32 registers, only $f 4 - $f 11 , $f 16 - $f 19 and $f 20 - $f 31 can
be used by the programmer for storing values, as the others are reserved for special purposes.

<u>Note</u>

- Unlike the general purpose register $ 0 , $f 0 is not hardwired to be zero, and is used for storing results of procedures.

### **Declaring a Floating point number**

```asm
.data
  num1: .float 3.
  num2: .double 4.5 3

  .align 2 # Since float has 2^2 bytes
  float_arr: .space 100 it has to be aligned to 2

  .align 3 # Since double has 2^3 bytes it has to be aligned to 3
  double_arr: .space 100 
```

### **Reading and Printing Floating point numbers**

Reading and printing a floating point number is similar to that of an integer, using syscall,
only difference being in the $v0 value and parameter registers.

#### **Single precision**

The $v0 value for reading a single precision floating point number is 6 while that of printing is 2.

```asm
main: 
  li $v0, 6 
  syscall    # The number is stored in $f0 
        
  li $v0, 2 
  mov.s $f12, $f0   # The number to be printed is moved to $f12 
  syscall     
```

#### **Double precision**

The $v0 value for reading a double precision floating point number is 7 while that of
printing is 3.

```asm
main: 
  li $v0, 7 
  syscall    # The number is stored in $f0/$f1 
        
  li $v0, 3 
  mov.d $f12, $f0   # The number to be printed is 
  syscall     moved to $f12/$f13 
```

### **Data Movement Instructions**

|Instruction | Syntax | Remarks |
|---|---|---|
|Load single/double| l.s fdest, address l.d fdest, address | The single/double floating-point stored in address is loaded onto register fdest |
|Store single/double | s.s fsrc, address s.d fsrc, address | The single/double floating-point stored in register fsrc is stored to address | 
| Move single/double | mov.s fdest, fsrc mov.d fdest, fsrc | The single/double floating-point stored in register fsrc is moved to register fdest |
|Move from coprocessor 1 |mfc1 dest, fsrc | The 32 - bit data from floating register fsrc is copied to general purpose register dest |
| Move to coprocessor 1 | mtc1 src, fdest | The 32 - bit data from general purpose register src is copied to floating point register fdest |

<u>Note</u>

- There is no load immediate for floating point. So if a constant is needed, it has to be stored in
    the data segment and loaded to the required register.
- For the move to/from coprocessor 1 instructions, the first operand is a general purpose
    register and the second one is the floating point register.

### **Arithmetic Instructions**

|Instruction | Syntax | Remarks|
|:----|------|-----|
|Addition | add.s fdest, fsrc1, fsrc2 <br> add.d fdest, fsrc1, fsrc |The single/double floating-point numbers stored in fsrc1 and fsrc2 <br> are added and stored in register fdest |
|Subtraction | sub.s fdest, fsrc1, fsrc2 <br> sub.d fdest, fsrc1, fsrc2 |The single/double floating-point number stored in fsrc <br> subtracted from fsrc1 and stored in register fdest |
| Multiplication | mul.s fdest, fsrc1, fsrc2 <br> mul.d fdest, fsrc1, fsrc2 |The single/double floating-point numbers stored in fsrc1 and fsrc2 <br> are multiplied and stored in register fdest |
|Division | div.s fdest, fsrc1, fsrc2 <br> div.d fdest, fsrc1, fsrc |The single/double floating-point number stored in fsrc1 is divided by fsrc2   <br> and the quotient is stored in register fdest |
|Negation  | neg.s fdest, fsrc <br> neg.d fdest, fsrc | The single/double floating-point number stored in fsrc <br> is negated (Sign changed) and stored in register fdest |
| Absolute value | abs.s fdest, fsrc <br> abs.d fdest, fsrc | Absolute value (Magnitude) of the single/double floating-point number stored in fsrc <br> is stored in register fdest |
| Square root | sqrt.s fdest, fsrc <br> sqrt.d fdest, fsrc | Square root of the single/double floating-point number stored in fsrc <br> is stored in register fdest

### **Sample Question 1**

Given a temperature in Fahrenheit, convert it into Celsius (Input and output has to be floating point values).

Temperature in degrees Celsius = (Temperature in degrees Fahrenheit - 32 ) * 5 / 9.
```asm
data 
  # Constants used for calculation 
  const1: .double 32.0 
  const2: .double 5.0 
  const3: .double 9.0 
  
  # User prompts 
  msg1: .asciiz "Enter the temperature in Fahrenheit: " 
  msg2: .asciiz "The temperature in Celsius is: " 
 

.text 
.globl main 
main: 
 
  li $v0, 4                    # Printing msg1 
  la $a0, msg1 
  syscall 
  
  li $v0, 7                    # Reading user input 
  syscall 
  
  mov.d $f12, $f0              # $f12 = User Input 
  l.d $f14, const1             # $f12 = $f12 - 32 
  sub.d $f12, $f12, $f14 
  
  l.d $f14, const2             # $f12 = $f12 * 5 
  mul.d $f12, $f12, $f14 
  
  l.d $f14, const3             # $f12 = $f12 / 9 
  div.d $f12, $f12, $f14 
  
  li $v0, 4                    # Printing msg2 
  la $a0, msg2 
  syscall 
  
  li $v0, 3                    # Printing final answer 
  syscall 
  
  li $v0, 10                   # Exit 
  syscall 
```

## **Comparison/Branch Instructions**

|Instruction | Syntax | Remarks|
|---|---|---|
| Compare equal | c.eq.s cc, fsrc1, fsrc2 <br> c.eq.s fsrc1, fsrc2 <br>c.eq.d cc, fsrc1, fsrc2 <br> c.eq.d fsrc1, fsrc2 |Sets the condition flag cc as 1 if the numbers in fsrc1 <br> and fsrc2 are equal, 0 otherwise.|
|Compare less than | c.lt.s cc, fsrc1, fsrc2 <br> c.lt.s fsrc1, fsrc2 <br> c.lt.d cc, fsrc1, fsrc2 <br> c.lt.d fsrc1, fsrc2 | Sets the condition flag cc as 1 if the number in fsrc1 <br> is less than that in fsrc2, 0 otherwise. |
| Compare less than or equal to | c.le.s cc, fsrc1, fsrc2 <br> c.le.s fsrc1, fsrc2 <br> c.le.d cc, fsrc1, fsrc2 <br> c.le.d fsrc1, fsrc|Sets the condition flag cc as 1 if the number in fsrc1 <br> is less thanor equal to that in fsrc2, 0 otherwise. |
|Branch if true | bc1t cc, label <br> bc1t label | Jumps to label if the condition flag cc is set as 1 |
|Branch if false | bc1f cc, label <br> bc1f label | Jumps to label if the condition flag cc is set as 0 |

<u>Note</u>

- The condition flag can be omitted in the above instructions, in which case condition flag 0 is
    taken as default.
- As there is no comparison instruction for “Not equal to”, it has to be implemented by
    reversing the required branch condition
    Ex. We need to branch to label if $f4 and $f6 are not equal. This can be written as
    ```asm
      c.eq.d $f4, $f6
      bc1.f label
    ```
- For greater than and greater than and equal to, it is simpler to reverse the input registers.
    Ex. We need to branch to label if $f4 if greater than $f6. This can be written as
    ```asm
      c.le.d $f6 , $f4
      bc1.t label
    ```

### **Sample Question 2**
Given an array of floating numbers of size n, print the maximum and minimum element


```asm
data 
  # Array 
  .align 3 
  arr: .space 1000 
  
  # Characters 
  newline: .asciiz "\n" 
 
  # User Prompts 
  msg1: .asciiz "Enter n: " 
  msg2: .asciiz "Enter no. " 
  msg3: .asciiz ": " 
  msg4: .asciiz "The maximum no. is: " 
  msg5: .asciiz "The minimum no. is: " 
 
.text 
.globl main 
main: 
  
  li $v0, 4    # Print msg1 
  la $a0, msg1 
  syscall 
  
  li $v0, 5    # Read n 
  syscall 
  move $t0, $v0 
  
  li $t1, 0    # $t1 will be the loop variable  
               # going from 0,1,2.. 
  li $t2, 0    # $t2 will be the element indices 
               # going from 0,8,16.. 
  loop1:                      # Loop to read n elements 
    beq $t0, $t1, end_loop1   # Termination condition 
   
    li $v0, 4                 # Print msg2 
    la $a0, msg2 
    syscall 
   
    li $v0, 1                 # Print position of                    
    move $a0, $t1             # number to be inputted 
    addi $a0, $a0, 1 
    syscall 
   
    li $v0, 4                 # Print msg3 
    la $a0, msg3 
    syscall 
   
    li $v0, 7                 # Read input and  
    syscall                   # store in arr 
    s.d $f0, arr($t2) 
   
    addi $t1, $t1, 1   # Increamenting #t1  
    addi $t2, $t2, 8   # and $t2 
    j loop1 
  
  end_loop1: 
  
  li $t1, 0    # Resetting $t1 and $t2 
  li $t2, 0 
  l.d $f4, arr($zero)  # $f4 stores the max value 
  l.d $f6, arr($zero)  # $f6 stores the min value

  loop2:                        # Loop to compute max and min 
    beq $t0, $t1, end_loop2     # Termination Condition 
   
    l.d $f8, arr($t2)           # Load a number from arr 
   
    c.lt.d $f4, $f8             # Compare if the number is  
                                # greater than current max 
    bc1f not_max  
      mov.d $f4, $f8            # If yes then update new max 
    not_max: 
   
    c.lt.d $f8, $f6             # Compare if the number is  
                                # less than current min 
    bc1f not_min 
      mov.d $f6, $f8            # If yes then update new min 
    not_min: 
   
    addi $t1, $t1, 1            # Incrementing $t1 and $t2 
    addi $t2, $t2, 8 
    j loop2 
  
  end_loop2: 
  
  li $v0, 4                      # Print msg4 
  la $a0, msg4 
  syscall 
  
  li $v0, 3                      # Print max number 
  mov.d $f12, $f4 
  syscall 

  i $v0, 4    # Print newline 
  la $a0, newline 
  syscall 
  
  li $v0, 4    # Print msg5 
  la $a0, msg5 
  syscall 
  
  li $v0, 3    # Print min number 
  mov.d $f12, $f6 
  syscall 
  
  li $v0, 10   # Exit 
  syscall 
```

### **Data Conversion Instructions**

#### **Conversion within floating point**

| Instruction | Syntax | Remarks|
|---|---|---|
|Convert single to double | cvt.d.s fdest, fsrc |The single floating-point stored in fsrc is converted to double and stored in fdest |
|Convert double to single | cvt.s.d fdest, fsrc| The double floating-point stored in fsrc is converted to single and stored in fdest |

### **Conversion to integers**

| Instruction | Syntax | Remarks|
|---|---|---|
|Convert single to integer | cvt.w.s fdest, fsrc |The single floating-point stored in fsrc is converted  to 32 bit integer (Ignoring the part after decimal point) <br> and  stored in 2 ’s compliment form in fdest |
|Convert double to integer | cvt.w.d fdest, fsrc | The double floating-point stored in fsrc is converted to 32 bit integer (Ignoring the part after decimal point) and <br> stored in 2 ’s compliment form in fdest |

<u> Note </u>

- The output of the above two instructions is in 2 ’s compliment form, which should not be
    used with any other instructions other than mfc1. Other instructions always assume the data
    in registers are according to IEEE standards, which can cause errors.

#### **Conversion from integers**

| Instruction | Syntax | Remarks|
|---|---|---|
|Convert integer to single | cvt.s.w fdest, fsrc |The data stored in fsrc is considered as an integer in 2 ’s compliment form and <br> is converted to single precision floating point and is stored in fdest |
| Convert integer to double | cvt.d.w fdest, fsrc | The data stored in fsrc is considered as an integer in 2 ’s compliment form and <br> is converted to double precision floating point and is stored in fdest |

### **Special Instructions**

| Instruction | Syntax | Remarks |
|---|---|---|
| Ceiling | ceil.w.s fdest, fsrc <br> ceil.w.d fdest, fsrc | The smallest integer not greater than the floating point number in fsrc <br> is stored in fdest in 2 ’s compliment form |
|Floor | floor.w.s fdest, fsrc <br> floor.w.d fdest, fsrc | The greatest integer not smaller than the floating point number in fsrc <br> is stored in fdest in 2 ’s compliment form |
|Round to nearest integer |round.w.s fdest, fsrc <br> round.w.d fdest, fsrc | The floating-point stored in fsrc is rounded off to <br> nearest integer and  stored in fdest in 2 ’s compliment form |

### **Sample Question 3**

Given a floating point number and an integer n, round off the floating point number to n
digits.

<u> Hint- </u>

Multiplty then given number with 10^n, and round off using round.w.d instruction.
Divide the result by 10^n to obtain the final result.

```asm
data 
  # Constants used for calculation 
  const1: .double 0.0 
  const2: .double 1.0 
  const3: .double 10.0 
  
  # User prompts 
  msg1: .asciiz "Enter the number : " 
  msg2: .asciiz "Enter number of digits to round off to: " 
  msg3: .asciiz "The rounded off number is: " 
  
.text 
.globl main 
main: 
  
  li $v0, 4     # Print msg1 
  la $a0, msg1 
  syscall 
  
  li $v0, 7     # Read number to round off 
  syscall 
  
  mov.d $f12, $f0    # $f12 = user input 
  
  li $v0, 4     # Print msg2 
  la $a0, msg2 
  syscall 
  
  li $v0, 7     # Read n 
  syscall 

  mov.d $f16, $f0    # $f16 = n 
  l.d $f4, const1    # $f4 used as a loop varibale 
                     # initialised to 0 
  l.d $f6, const2    # $f6 used to store 10^n 
  l.d $f8, const3    # $f8 used to store 10 for  
                     # calculating power 
  l.d $f10, const2   # $f10 used to store 1 for  
                     # incrementing loop variable 
  loop1:    # Loop to compute 10^n 
    c.eq.d $f4, $f16  # Ternminaltion Condition 
    bc1t end_loop1 
  
    mul.d $f6, $f6, $f8 # $f6 = $f6 * 10 
    add.d $f4, $f4, $f10  # $f4 = $f4 + 1 
  
    j loop1 
  end_loop1: 
  
  mul.d $f12, $f12, $f6  # $f12 = $f12 * (10^n) 
  round.w.d $f12, $f12   # $f12 is rounded to nearest 
                         # integer 
  cvt.d.w $f12, $f12     # Output after rounding,  
                         # which is a word, is  
                         # converted back to double 
  div.d $f12, $f12, $f6  # $f12 = $f12 / (10^n) 
  
  li $v0, 4    # Print msg3 
  la $a0, msg3 
  syscall  
 
  li $v0, 3    # Print final answer 
  syscall 
  
  li $v0, 10   # Exit 
  syscall 
```