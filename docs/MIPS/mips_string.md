# **MIPS**
## **String Operations**

Strings in MIPS can be declared as constant in the _.data_ part of the program. They are often stored
this way so that they can be used as user prompts or to format output of a program. Strings can also
be entered by the user during the runtime of the program. Both methods of using strings in MIPS
will be demonstrated below.

**1. Entering string constants**

Pre-determined strings enclosed by double quotes can be declared in the _.data_ section.

_Code to store the string “enter an element:” in memory under the name “message”:_

```asm
.data 
message: .asciiz “enter an element:”  
```
**2. Enter strings as input from the user**

To enter strings as input, the syscall code to be used is 8. Apart from that, the address of the
memory space into which the string must be entered, is loaded into the $a0 register. The
maximum size of the string must also be loaded into the $a1 register before performing the
syscall.

_Code to read a string as input from the user:_

```asm
.data 
input: .space 100 
inputsize: .word 100 
.text 
li $v0, 8 
la $a0, input 
lw $a1, inputsize 
syscall
```
**3. Printing strings stored in memory**

To print the required string, the syscall to be used is 4. The address of the string has to be
loaded into the $a0 register.

_Code to print a string named ‘message’ stored in memory:_
```asm
.text 
li $v0, 4 
la $a0, output 
syscall 
```
We have now learnt how to declare strings constants as well as how to store strings entered
by the user. We shall now write a program combining both the concepts for a more robust
understanding of basic string operations.

_Code to read a string, with prompts instructing the user:_

```asm
.text 
main: 
    # Prompt for the string to enter 
    li $v0, 4 
    la $a0, prompt 
    syscall 
 
    # Read the string.  
    li $v0, 8 
    la $a0, input 
    lw $a1, inputSize  
    syscall 
     
    # Output the text 
    li $v0, 4 
    la $a0, output 
    syscall

    # Output the number 
    li $v0, 4 
    la $a0, input 
    syscall 
 
    # Exit the program 
    li $v0, 10 
    syscall 
 
.data 
input:        .space 81 
inputSize:    .word 80 
prompt:       .asciiz "Please enter a string: " 
output:       .asciiz "\nYou typed the string: " 
```

### **Points To Note**

- The _.space_ directive allocates n bytes of memory in the data region of the program, where
    n=81 in this program. Since the size of a character is 1 byte, this is equivalent to saving 80
    characters for data. 81 was used here because in MIPS a sequence of ASCII characters is
    terminated by a null value (byte containing 0). This is known as a null terminator.  

- If the string the user enters is larger than the  maximum size of the string, it is truncated to
    the maximum size. This is to prevent the program from accessing memory not allocated to
    the string.

## **String Operations (Advanced)**

### **Null Character and Newline**

When strings are created by using user input (code 8 passed to $vo), it forms a sequence of ASCII
characters that are terminated by a newline character, followed by a NULL character. The newline
character is triggered by the pressing of enter key during user input.

_The ASCII code for newline is 10. Hence_ beq, $t1,10,label _can be used as a comparing instruction_

_MIPS treats NULL character as a zero. Hence_ beqz, $t1, label _can be used as a comparing instruction_

### **String Traversal**

Strings are made up of characters, in which each character occupies a byte. Hence, unlike an Integer
Array, each character must be traversed byte by byte.

Eg:

To find the length of a string (newline character need not be included)

```asm
# assume string is input to str1 
li $s1,0 #loop counter (i) 
  
len: 
  lb $t1,str1($s1)  # $t1=str[i] 
  beq $t1,10,start  # termination condition 
  addi $s1,$s1,1    # i=i+1 
  j len 
start: 
  li $v0,1          # print len=i  
  move $a0,$s1 
  syscall
```

_If the newline character needs to be included in the length, beq should be replaced with beqz_

### **String Concatenation**

Concatenation of two strings can be done using 2 loops. The presence of newline and null character
at the end of each string should be considered.

Consider two strings, str1 and str2. The following is the pseudocode and the code snippet for
concatenating str2 to str1:  
_Pseudo Code:_

```c
i=0

j=0

while str1[i]!='\n'

i++

while str2[j]!='\0'

str1[i]=str2[j]

i++

j++
```
_MIPS:_

```asm
i $s1,0           # i=0 
li $s2,0           # j=0 
loop1: 
   lb $t1,str1($s1)  
  beq $t1,10,loop2 
  addi $s1,$s1,1           # i++ 
  j loop1 
loop2: 
  lb $t1,str2($s2) 
  beqz $t1,end 
  sb $t1,str1($s1)    # str1[i]=str[j] 
  addi $s1,$s1,1      # i++ 
  addi $s2,$s2,1      # j++ 
  j loop2 
end:
```

### **Palindrome Checking**

A palindrome sequence that reads the same backwards as forwards. Palindrome checking uses two
pointer method.

Assume a string str, whole length is n. Length of the string is calculated by previous method and
stored in $s1. The following code snippet shows the while loop necessary for checking whether the
string is palindrome

```asm
addi $s1,$s1,-1 # j=n-1  
li $s0,0        # i=0 
for: 
  lb $t1,str($s0)   
  lb $t2,str($s1)   
  bge $s0,$s1,true    # if i>=j,exit loop. return True 
  bne $t1,$t2,false   # if str[i]!=str[j], return False 
  addi $s0,$s0,1      #  i++ 
  addi $s1,$s1,-1     #  j-- 
  j for 
```