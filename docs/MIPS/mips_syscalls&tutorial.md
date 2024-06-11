# **MIPS Instructions and Syscall**

## **MARS Assemby AND System Calls**

Before assembling, the environment of this simulator can be simplisticly split to three
segments: the editor at the upper left where all of the code is being written, the
compiler/output right beneath the editor and the list of registers that represent the
"CPU" for our program.

After assembling (by simply pressing F3) the environment changes, with two new
segments getting the position of the editor: the text segment where

i) each line of assembly code gets cleared of "pseudo instructions" (we'll talk about
those in a sec) at the "basic" column and

ii) the machine code for each instruction at the "code" column,
and the data segment where we can have a look at a representation of the memory of
a processor with little-endian order.

After assembling, we can execute our code either all at once (F5) or step by step (F7),
as well as rewinding the execution several steps backwards to the back (F8).

_**MARS accepts and exports files with the .asm filetype**_

### **Pseudo instructions**

Before looking at the instruction set , let us look at a few pseudo instructions that’ll
help you understand the IS better.

_**Here's a list of useful pseudo-instructions.**_

mov $t0, $t1: Copy contents of register t1 to register t0.

li $s0, immed: Load immediate into to register s0.
The way this is translated depends on whether immed is 16 bits or 32 bits.

la $s0, addr: Load address into to register s0.

lw $t0, address: Load a word at address into register t0

_**Given below are some standard arithmetic and logical instructions standard to
the MIPS Instruction Set Architecture.**_

_**MARS provides a small set of operating system-like services through the system
call (syscall) instruction **_

_**To request a service, a program loads the system call code into register $v0 and 
arguments into registers $a0~$a3 **_

_**System calls that return values put their results in register $v0**_

### **Arithmetic Instructions**

| Instruction                 | Example         | Meaning          | Comments                                                                                     |
| --------------------------- | --------------- | ---------------- | -------------------------------------------------------------------------------------------- |
| add                         | add $1,$2,$3    | $1=$2+$3         |                                                                                              |
| subtract                    | sub $1,$2,$3    | $1=$2-$3         |                                                                                              |
| add immediate               | addi $1,$2,100  | $1=$2+100        | "Immediate" means a constant number                                                          |
| add unsigned                | addu $1,$2,$3   | $1=$2+$3         | Values are treated as unsigned integers,not two's complement integer                         |
| subtract unsigned           | subu $1,$2,$3   | $1=$2-$3         | Values are treated as unsigned integers,not two's complement integers                        |
| add immediate unsigned      | addiu $1,$2,100 | $1=$2+100        | Values are treated as unsigned integers,not two's complement integers                        |
| multiply (without overflow) | mul $1,$2,$3    | $1=$2\*$3        | Result is only 32 bits!                                                                      |
| multiply                    | mult $1,$2,$3   | $hi, $low=$2\*$3 | Upper 32 bits stored in special register `hi`. Lower 32 bits stored in special register `lo` |
| divide                      | div $1,$2,$3    | $hi,$low=$2/$3   | Remainder stored in special register `hi`. Quotient stored in special register `lo`          |

### **Logical**

| Instruction         | Example        | Meaning   | Comments                               |
| ------------------- | -------------- | --------- | -------------------------------------- | 
| and                 | and $1,$2,$3   | $1=$2&$3  | Bitwise AND                            |
| or                  | or $1,$2,$3    | $1=$2I$3   | Bitwise OR                             |
| and immediate       | andi $1,$2,100 | $1=$2&100 | Bitwise AND with immediate value       |
| or immediate        | ori $1,$2,100  | $1=$2I100  | Bitwise OR with immediate value        |  
| shift left logical  | sll $1,$2,10   | $1=$2<<10 | Shift left by constant number of bits  |
| shift right logical | srl $1,$2,10   | $1=$2>>10 | Shift right by constant number of bits |

### **Data Transfer**

| Instruction          | Example       | Meaning                 | Comments                                                                                                      |
| -------------------- | ------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| load word            | lw $1,100($2) | $1=Memory[$2+100]       | Copy from memory to register                                                                                  |
| store word           | sw $1,100($2) | Memory[$2+100]=$1       | Copy from register to memory                                                                                  |
| load upper immediate | lui $1,100    | $1=100x2^16             | Load constant into upper 16 bits. Lower 16 bits are set to zero                                               |
| load address         | la $1,label   | $1=Address of the label | Pseudo-instruction (provided by assembler). Loads computed address of label (not it's contents) into register |
| load immediate       | li $1,100     | $1=100                  | Pseudo instruction (provided by assembler). Loads immediate value into the register.                          |
| move from hi         | mfhi $2       | $2=hi                   | Copy from special register `hi` to general register                                                           |
| move from lo         | mflo $2       | $2=lo                   | Copy from special register `lo` to general register                                                           |
| load word            | lw $1,100($2) | $1=Memory[$2+100]       | Copy from memory to register                                                                                  |
| move                 | move $1,$2    | $1=$2                   | Pseudo instruction (provided by assembler). Copy from register to register                                    |

### **Conditional Branch**

| Instruction                     | Example       | Meaning                   | Comments                        |
| ------------------------------- | ------------- | ------------------------- | ------------------------------- |
| branch on equal                 | beq $1,$2,100 | if($1==$2) go to PC+4+100 | Test if registers are equal     |
| branch on not equal             | bne $1,$2,100 | if($1!=$2) go to PC+4+100 | Test if registers are not equal |
| branch on greater than          | bgt $1,$2,100 | if($1>$2) go to PC+4+100  | Pseudo-instruction              |
| branch on greater than or equal | bge $1,$2,100 | if($1>=$2) go to PC+4+100 | Pseudo-instruction              |
| branch on less than             | blt $1,$2,100 | if($1<$2) go to PC+4+100  | Pseudo-instruction              |
| branch on less than or equal    | ble $1,$2,100 | if($1<=$2) go to PC+4+100 | Pseudo-instruction              |

### **Comparison**

| Instruction                | Example          | Meaning                       | Comments                                                       |
| -------------------------- | ---------------- | ----------------------------- | -------------------------------------------------------------- |
| set on less than           | slt $s1,$s2,$s3  | if($2<$3) $1 = 1;else $1 = 0  | Test if less than. If true set $1 to 1. Otherwise set $1 to 0. |
| set on less than immediate | slti $s1,$s2,100 | if($2<100) $1 = 1;else $1 = 0 | Test if less than. If true set $1 to 1. Otherwise set $1 to 0. |

### **Unconditional Jump**

| Instruction   | Example  | Meaning                     | Comments                                                             |
| ------------- | -------- | --------------------------- | -------------------------------------------------------------------- |
| jump          | j 1000   | go to address 1000          | Jump to target address                                               |
| jump register | jr $1    | go to address stored in $1  | For switch procedure return                                          |
| jump and link | jal 1000 | $ra=PC+4 go to address 1000 | Use when making procedure call. This saves the return address in $ra |

### **System Calls**

| Service      | Operation                                                                                                     | Code(in $v0) | Arguments                                                                     | Results                 |
| ------------ | ------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------- | ----------------------- |
| print_int    | Print integer number (32 bit)                                                                                 | 1            | $a0 = integer to be printed                                                   | None                    |
| print_float  | Print floating-point number (32 bit)                                                                          | 2            | $f12 = float to be printed                                                    | None                    |
| print_double | Print floating-point number (64 bit)                                                                          | 3            | $f12 = integer to be printed                                                  | None                    |
| print_string | Print null-terminated character string                                                                        | 4            | $a0 = address of string in memory                                             | None                    |
| read_int     | Read integer number from user                                                                                 | 5            | None                                                                          | Integer returned in $v0 |
| read_float   | Read floating-point number from user                                                                          | 6 None       | Float returned in $f0                                                         |
| read_double  | Read double floating-point number from user                                                                   | 7            | None                                                                          | Double returned in $f0  |
| read_string  | Works the same as Standard Clibrary fgets()                                                                   | 8            | $a0 = memory address of string input buffer $a1 = length of string buffer (n) | None                    |
| sbrk         | Returns the address to a block of memory containing n additional bytes (Useful for dynamic memory allocation) | 9            | $a0=amount                                                                    | address in $v0          |
| exit         | Stop program from running                                                                                     | 10           | None                                                                          | None                    |
| print_char   | Print character                                                                                               | 11           | $a0 = character to be printed                                                 | None                    |
| read_char    | Read character from user                                                                                      | 12           | None                                                                          | Char returned in $v0    |
| exit2        | Stops program from running and returns an integer                                                             | 17           | $a0 = result(integer number)                                                  | None                    |

The complete list of syscalls can be accessed at  
[https://courses.missouristate.edu/KenVollmar/mars/Help/SyscallHelp.html](https://courses.missouristate.edu/KenVollmar/mars/Help/SyscallHelp.html)

### **Assembler Directives**

| Directive         | Result                                                                                                            |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| .word w1, ..., wn | Store n 32-bit values in successive memory words                                                                  |
| .half h1, ..., hn | Store n 16-bit values in successive memory words                                                                  |
| .byte b1, ..., bn | Store n 8-bit values in successive memory words                                                                   |
| .ascii str        | Store the ASCII string str in memory. Strings are in double-quotes, i.e. "Computer Science"                       |
| .asciiz str       | Store the ASCII string str in memory and null terminate it. Strings are in double-quotes, i.e. "Computer Science" |
| .space n          | Leave an empty n-byte region of memory for later use                                                              |
| .align n          | Align the next datum on a 2^n byte boundary. For example, .align 2 aligns the next value ona word boundary        |

### **Registers**

| Register Number | Register Name | Description                                            |
| --------------- | ------------- | ------------------------------------------------------ |
| 0               | $zero         | The value 0                                            |
| 2-3             | $v0-$v1       | Values from expression evaluation and function results |
| 4-7             | $a0-$a3       | (arguments) First four parameters for subroutine       |
| 8-15, 24-25     | $t0-$t9       | Temporary variables                                    |
| 16-23           | $s0-$s7       | Saved values representing final computed results       |
| 31              | $ra           | Return address                                         |

### **MARS(MIPS Assembler/Simulator) Tutorial**

**1. Input the Tutorial program**

1.1) Open the MARS program and click from the file menu choose “File...New”. A
black document will open which you can enter your assembly code into. Click
“File...Save As” and save the file as “Tutorial1.asm ”.

1.2) Enter the code as shown below into the editor and save the file.

::: details Tutorial Code

```asm
# Program File: Tutorial1.asm
# Written by:   MoSaad
# Date Created: 10/05/2023
# Description:  Tutorial program to introduce MARS simulator  including: breakpoints, single-
stepping, and register and memory windows.
#-----------------------------------------------------------
#-----------------------
# Declare some constants
#-----------------------
.data
string1: .asciiz "Welcome to Hardware Lab at NIT Calicut\n"
string2: .asciiz "Hello World \n"
string3: .asciiz "\nLoop #"
#------------------
# Main program body
#------------------
.text
main:
li $v0,4
la $a0,string1
syscall
la $a0,string2
syscall
li $t0, 1
loop:
li $v0, 4
la $a0,string3
syscall
li $v0,1
move $a0,$t0
syscall
addi $t0,$t0,1
bne  $t0,4,loop
#-----
# Halt
#-----
li $v0, 10
syscall
```

:::

<img src="/img/mips1-image-0093.png">

1.4) From the menu, choose “Run...Assemble”. The “Mars Messages” window at the
bottom of the screen will indicate if any errors occurred. No errors should occur.

<img src="/img/mips1-image-0094.png">

**2. Simulate the tutorial program**

2.1) From the menu, choose “Run...Go” to execute the program. The program will
execute displaying two lines of text and three iterations of a loop to the Run /IO
window.

2.2) The buttons at the top of the window can be used as shortcuts for the run menu.
Use the “Reset” button to reset the program, and then try tracing through the
program by clicking the step button.

2.3) You can adjust the speed the program runs by moving the slider to the right of the
buttons. If you have an infinite loop in your program, it may be necessary to adjust
(slow down) the speed of the simulator to prevent the MARS program from
crashing.

<img src="/img/mips1-image-0101.png">  
Run the program.  If a breakpoint has been set the program will stop at the next breakpoint.

<img src="/img/mips1-image-0102.png">  
Trace  (Step)  Into.  Executes  a  single  instruction.  If 
the instruction is a procedure call (jal) the simulator will stop at the first instruction of the procedure.

<img src="/img/mips1-image-0103.png">  
Backstep. Undo the last step taken in the code.

<img src="/img/mips1-image-0104.png">  
Pause the currently running program. Press the run button to continue execution.

<img src="/img/mips1-image-0105.jpg">  
Stop the currently running program. You will need to reset the simulator to execute the program again after stopping it.

<img src="/img/mips1-image-0106.png">  
Reset.  Resets the simulator, reinitializing the registers, program counter, and memory.

<img src="/img/mips1-image-0107.png">  
Adjusts the speed that the simulator runs at.

**3. Using the Debugging Tools**

3.1) When a program does not work as expected you will need to use the debugging
tools provided with the simulator.

3.2) One of the primary tools used to debug a program is setting a breakpoint. You can
break before execution of an instruction by clicking on the checkbox associated
with each instruction on the far left of the execute window. Set a breakpoint at
the instruction: addi $t0,$t0,1

3.3) Run the program until the breakpoint by clicking “Run”. At this point in the
program only the first loop iteration has been printed. (You will need to click
back to the Run/IO window to see the output.)

3.4) Now use the “Trace Into” button to step through the loop that prints out the next line
of text one character at a time. Step through the instructions until “Loop #2” is
printed to the output window. Stop and find the value of the registers “t0” and
“pc” at that point? Has the line of code that the program counter points to executed
yet?

3.5) The simulator also allows you to view the memory contents. The memory window
appears in the middle of the screen and is titled “Data Segment”. Remove the
earlier breakpoint and add a breakpoint to line 33, “syscall”. Click the run button
so that the program executes up until the new breakpoint. We are now in the code
right before “Loop #” is about to be printed for the third iteration. Notice that the $a0 register is now a pointer to the address where the “Loop #” text is stored. What
is the memory location the register is pointing to?

3.6) Now look in the data segment area, and find the address $a0 points to. This is the
memory section where the characters of the text “Loop #” is stored. Using an
ASCII table find the address where the ‘p’ in “Loop” is located?

3.7) Exercise: Can you find where the word “Welcome” is stored in the memory?

<img src="/img/mips1-image0120.png">
