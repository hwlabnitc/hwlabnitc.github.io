# **MIPS**

## **Setting up the MARS Code Editor** 

### **Introduction to MARS Simulator**

MARS simulator will be the software on which we will be running our MIPS code.

#### **Setting up JAVA SDK**
*__(Please note this tutorial is to download SDK Ver 11)__*

##### **Downloading Java SDK on MacOS:**
1. Open a web browser on your macOS computer. 
2. Go to the Oracle Java SE Downloads page at https://www.oracle.com/java/
technologies/javase-jdk11-downloads.html. 
3. On the Downloads page, locate the JDK (Java Development Kit) section. 
4. Click on the "Download" button for the version of Java you want to install. 
Make sure to select the version suitable for your macOS version (e.g., 
macOS x64). 
5. You may be prompted to log in or create an Oracle account. Follow the 
instructions on the screen to proceed. 
6. Once logged in, review and accept the license agreement. 
7. On the download page, locate the macOS version and click on the provided 
download link. 
8. The JDK installer package will be downloaded to your computer. 
9. Locate the downloaded package in your Downloads folder or the folder you 
specified for downloads. 
10. Double-click on the JDK installer package to launch the installation wizard. 
11. Follow the instructions in the installation wizard to complete the installation 
of the Java SDK on your macOS computer.   

##### **Downloading Java SDK on Windows:**
1. Open a web browser on your Windows computer. 
2. Go to the Oracle Java SE Downloads page at https://www.oracle.com/java/
technologies/javase-jdk11-downloads.html. 
3. On the Downloads page, locate the JDK (Java Development Kit) section. 
4. Click on the "Download" button for the version of Java you want to install. 
Make sure to select the version suitable for your Windows version (e.g., 
Windows x64). 
5. You may be prompted to log in or create an Oracle account. Follow the 
instructions on the screen to proceed. 
6. Once logged in, review and accept the license agreement. 
7. On the download page, locate the Windows version and click on the 
provided download link. 
8. The JDK installer executable file (e.g., jdk-11.0.x_windows-x64_bin.exe) 
will be downloaded to your computer. 
9. Locate the downloaded executable file, and double-click on it to launch the 
installation wizard. 
10. Follow the instructions in the installation wizard to complete the installation 
of the Java SDK on your Windows computer.

##### **Downloading Java SDK on Windows:**  
1. Open a web browser on your Linux computer. 
2. Go to the Oracle Java SE Downloads page at https://www.oracle.com/java/
technologies/javase-jdk11-downloads.html. 
3. On the Downloads page, locate the JDK (Java Development Kit) section. 
4. Click on the "Download" button for the version of Java you want to install. 
Make sure to select the version suitable for your Linux distribution. 
5. You may be prompted to log in or create an Oracle account. Follow the 
instructions on the screen to proceed. 
6. Once logged in, review and accept the license agreement. 
7. On the download page, locate the Linux version and click on the provided 
download link. 
8. The JDK archive file (e.g., jdk-11.0.x_linux-x64_bin.tar.gz) will be 
downloaded to your computer. 
9. Open the terminal on your Linux system. You can typically find it in the 
Applications menu or by using the shortcut Ctrl+Alt+T. 
10. Navigate to the directory where you downloaded the JDK archive file. For 
example, if it's in the Downloads folder, you can use the following 
command:  ```cd ~/Downloads ```  
11. Extract the contents of the JDK archive using the following command: 
```tar -xvzf jdk-11.0.x_linux-x64_bin```  

#### **Setting Up MARS Simulator**
 *__Note: Is your MARS text unreadably small? Download and use a 
new release Java 9 or above which contains a fix to automatically 
scale and size AWT and Swing components for High Dots Per Inch 
(HiDPI) displays on Windows and Linux.__*  

##### **Downloading MIPS MARS Simulator on macOS:**
1. Open a web browser on your macOS computer. 
2. Go to the official website of MIPS MARS at [ http://
courses.missouristate.edu/kenvollmar/mars/]( http://
courses.missouristate.edu/kenvollmar/mars/).
3. On the homepage, click on the "MARS 4.5" link under the 
"Download MARS" section. 
4. A ZIP file named "mars4_5.jar.zip" will be downloaded to your 
computer. 
5. Locate the downloaded ZIP file in your Downloads folder or the folder 
you specified for downloads. 
6. Double-click on the ZIP file to extract its contents. This will create a JAR 
file named "mars4_5.jar". 
7. Move the "mars4_5.jar" file to a suitable location on your computer, such 
as the Applications folder. 
8. Open Terminal on your macOS by going to Applications > Utilities > 
Terminal. 
9. In the Terminal window, navigate to the directory where you placed the 
"mars4_5.jar" file. For example, if you placed it in the Applications folder, 
you can use the following command: ``` cd/Applications```  
10. Once you are in the correct directory, execute the following command to 
run the MIPS MARS simulator: ```java -jar mars4_5.jar```  
11. The MIPS MARS simulator should now launch on your macOS computer. 

##### **Downloading MIPS MARS Simulator on Windows:**
1. Open a web browser on your Windows computer. 
2. Go to the official website of MIPS MARS at [http://courses.missouristate.edu/
kenvollmar/mars/]([http://courses.missouristate.edu/
kenvollmar/mars/])  
3. On the homepage, click on the "MARS 4.5" link under the "Download 
MARS" section. 
4. A ZIP file named "mars4_5.jar.zip" will be downloaded to your computer. 
5. Locate the downloaded ZIP file in your Downloads folder or the folder you 
specified for downloads. 
6. Right-click on the ZIP file and select "Extract All" to extract its contents. This 
will create a JAR file named "mars4_5.jar". 
7. Move the "mars4_5.jar" file to a suitable location on your computer, such as 
the Program Files folder. 
8. Open the Command Prompt on your Windows computer by pressing the 
Windows key + R, typing "cmd," and hitting Enter. 
9. In the Command Prompt window, navigate to the directory where you placed 
the "mars4_5.jar" file. For example, if you placed it in the Program Files 
folder, you can use the following command: ```cd "C:\Program Files"```  
10. Once you are in the correct directory, execute the following command to run 
the MIPS MARS simulator: ```java -jar mars4_5.jar```  
11. The MIPS MARS simulator should now launch on your Windows computer.   

##### **Downloading MIPS MARS Simulator on Linux:**
1. Open a web browser on your Linux computer. 
2. Go to the official website of MIPS MARS at [http://courses.missouristate.edu/
kenvollmar/mars/](http://courses.missouristate.edu/
kenvollmar/mars/) 
3. On the homepage, click on the "MARS 4.5" link under the "Download 
MARS" section. 
4. A ZIP file named "Mars4_5.jar.zip" will be downloaded to your computer. 
5. Open the terminal on your Linux system. You can typically find it in the 
Applications menu or by using the shortcut Ctrl+Alt+T. 
6. Navigate to the directory where you downloaded the ZIP file. For example, if 
it's in the Downloads folder, you can use the following command: ```cd ~/Downloads```  
7. Unzip the ZIP file using the following command: ```unzip Mars4_5.jar.zip```  
8. This will extract the "Mars4_5.jar" file from the ZIP archive. 
9. Move the "Mars4_5.jar" file to a suitable location on your computer. For 
instance, you can move it to the /opt directory using the following command: 
```sudo mv Mars4_5.jar /opt``` 
10. To run the MIPS MARS simulator, open the terminal and navigate to the 
directory where you placed the JAR file. For example, if you moved it to the /
opt directory, use the following command: 
```cd /opt```
11.    Execute the following command to launch the MIPS MARS simulator 
```java -jar Mars4_5.jar``` 
12. The MIPS MARS simulator should now launch on your Linux computer.  

### **MARS ASSEMBLY AND SYSTEM CALLS**
Before assembling, the environment of this simulator can be simplisticly split to three 
segments: the editor at the upper left where all of the code is being written, the 
compiler/output right beneath the editor and the list of  registers that represent the 
"CPU" for our program.   

After assembling (by simply pressing F3) the environment changes, with two new 
segments getting the position of the editor: the text segment where

i) each line of assembly code gets cleared of "pseudoinstructions" (we'll talk about 
those in a sec) at the "basic" column and   

ii) the machine code for each instruction at the "code" column, 
and the data segment where we can have a look at a representation of the memory of 
a processor with little-endian order.   

After assembling, we can execute our code either all at once (F5) or step by step (F7), 
as well as rewinding the execution several steps backwards to the back (F8).  

_**MARS accepts and exports files with the .asm filetype**_

##### **Pseudo instructions**  
 
Before looking at the instruction set , let us look at a few pseudo instructions that’ll 
help you understand the IS better.  

_**Here's a list of useful pseudo-instructions.**_ 

`mov $t0, $t1`: Copy contents of register t1 to register t0.   

`li $s0, immed`: Load immediate into to register s0. 
The way this is translated depends on whether immed is 16 bits or 32 bits.   

`la $s0, addr`: Load address into to register s0.   

`lw $t0, address`: Load a word at address into register t0   

_**Given below are some standard arithmetic and logical instructions standard to 
the MIPS Instruction Set Architecture.**_     

_**MARS provides a small set of operating system-like services through the system 
call (syscall) instruction **_  

_**To request a service, a program loads the system call code into register $v0 and 
arguments into registers $a0~$a3 **_  

_**System calls that return values put their results in register $v0**_ 

##### **Arithmetic Instructions**
|Instruction | Example | Meaning | Comments |
|---|---|---|---|
| add | add $1,$2,$3 | $1=$2+$3 | |
| subtract | sub $1,$2,$3 | $1=$2-$3 |           |
| add immediate | addi $1,$2,100 | $1=$2+100 |  "Immediate" means a constant number |
| add unsigned | addu $1,$2,$3 | $1=$2+$3 | Values are treated as unsigned integers,not two's complement integer|
| subtract unsigned | subu $1,$2,$3 | $1=$2-$3 | Values are treated as unsigned integers,not two's complement integers|
| add immediate unsigned | addiu $1,$2,100 | $1=$2+100 | Values are treated as unsigned integers,not two's complement integers|
| multiply (without overflow) | mul $1,$2,$3 | $1=$2*$3 | Result is only 32 bits! |
| multiply | mult $1,$2,$3 | $hi,  $low=$2*$3 | Upper 32 bits stored in special register ``hi``.   Lower 32 bits stored in special register ``lo``|
| divide | div $1,$2,$3 | $hi,$low=$2/$3 |Remainder stored in special register ``hi``. Quotient stored in special register ``lo`` |

#### **Logical**
|Instruction | Example | Meaning | Comments |
|---|---|---|---|
| and | and $1,$2,$3 | $1=$2&$3 | Bitwise AND|
| or | or $1,$2,$3 | $1=$2|$3 | Bitwise OR|
| and immediate | andi $1,$2,100 | $1=$2&100 | Bitwise AND with immediate value |
| or immediate | ori $1,$2,100 | $1=$2|100 | Bitwise OR with immediate value|
| shift left logical | sll $1,$2,10 | $1=$2<<10 | Shift left by constant number of bits|
| shift right logical | srl $1,$2,10 | $1=$2>>10 | Shift right by constant number of bits|

#### **Data Transfer**
|Instruction | Example | Meaning | Comments |
|---|---|---|---|
| load word | lw $1,100($2) | $1=Memory[$2+100] | Copy from memory to register|
| store word | sw $1,100($2) | Memory[$2+100]=$1 | Copy from register to memory|
| load upper immediate | lui $1,100 | $1=100x2^16 | Load constant into upper 16 bits. Lower 16 bits are set to zero|
| load address | la $1,label | $1=Address of the label | Pseudo-instruction (provided by assembler). Loads computed address of label (not it's contents) into register|
| load immediate | li $1,100 | $1=100 | Pseudo instruction (provided by assembler). Loads immediate value into the register.|
| move from hi | mfhi $2 | $2=hi | Copy from special register ``hi`` to general register|
| move from lo | mflo $2 | $2=lo | Copy from special register ``lo`` to general register|
| load word | lw $1,100($2) | $1=Memory[$2+100] | Copy from memory to register|
| move | move $1,$2 | $1=$2 | Pseudo instruction (provided by assembler). Copy from register to register|

#### **Conditional Branch**
|Instruction | Example | Meaning | Comments |
|---|---|---|---|
| branch on equal | beq $1,$2,100 | if($1==$2) go to PC+4+100 | Test if registers are equal|
| branch on not equal | bne $1,$2,100 | if($1!=$2) go to PC+4+100 | Test if registers are not equal|
| branch on greater than | bgt $1,$2,100 | if($1>$2) go to PC+4+100 | Pseudo-instruction |
| branch on greater than or equal | bge $1,$2,100 | if($1>=$2) go to PC+4+100 | Pseudo-instruction|
| branch on less than  | blt $1,$2,100 | if($1<$2) go to PC+4+100 | Pseudo-instruction|
| branch on less than or equal | ble $1,$2,100 | if($1<=$2) go to PC+4+100 | Pseudo-instruction|

#### **Comparison**
|Instruction | Example | Meaning | Comments |
|---|---|---|---|
| set on less than | slt $s1,$s2,$s3 | if($2<$3) $1 = 1;else $1 = 0 | Test if less than. If true set $1 to 1. Otherwise set $1 to 0.
| set on less than immediate | slti $s1,$s2,100 | if($2<100) $1 = 1;else $1 = 0 | Test if less than. If true set $1 to 1. Otherwise set $1 to 0.

#### **Unconditional Jump**
|Instruction | Example | Meaning | Comments |
|---|---|---|---|
| jump | j 1000 | go to address 1000 | Jump to target address|
| jump register | jr $1 | go to address stored in $1 | For switch procedure return|
| jump and link | jal 1000 | $ra=PC+4 go to address 1000 | Use when making procedure call. This saves the return address in $ra|

#### **System Calls**
| Service | Operation | Code(in $v0) | Arguments | Results |
|---|---|---|---|---| 
| print_int | Print integer number (32 bit) | 1 | $a0 = integer to be printed | None |
| print_float | Print floating-point number (32 bit) | 2 | $f12 = float to be printed | None |
| print_double | Print floating-point number (64 bit) | 3 | $f12 = integer to be printed | None |
| print_string | Print null-terminated character string | 4 | $a0 = address of string in memory | None |
| read_int | Read integer number from user | 5 | None | Integer returned in $v0 |
| read_float | Read floating-point number from user | 6 None | Float returned in $f0|
| read_double | Read double floating-point number from user | 7 |None | Double returned in $f0|
| read_string | Works the same as Standard Clibrary fgets() | 8 | $a0 = memory address of string input buffer   $a1 = length of string buffer (n) | None |
| sbrk | Returns the address to a block of memory containing n additional bytes (Useful  for dynamic memory allocation) | 9 | $a0=amount | address in $v0 |
| exit | Stop program from running | 10 | None | None |
| print_char | Print character | 11 | $a0 = character to be printed | None |
| read_char | Read character from user | 12 | None | Char returned in $v0 |
| exit2 | Stops program from running and returns an integer | 17 | $a0 = result(integer number) | None |

The complete list of syscalls can be accessed at  
[https://courses.missouristate.edu/KenVollmar/mars/Help/SyscallHelp.html](https://courses.missouristate.edu/KenVollmar/mars/Help/SyscallHelp.html )

#### **Assembler Directives**
| Directive | Result |
|---|---|
| .word w1, ..., wn| Store n 32-bit values in successive memory words |
| .half h1, ..., hn| Store n 16-bit values in successive memory words |
| .byte b1, ..., bn| Store n 8-bit values in successive memory words |
| .ascii str| Store the ASCII string str in memory. Strings are in double-quotes, i.e. "Computer Science" |
| .asciiz str| Store the ASCII string str in memory and null terminate it. Strings are in double-quotes, i.e. "Computer Science" |
| .space n| Leave an empty n-byte region of memory for later use |
| .align n| Align the next datum on a 2^n byte boundary. For example, .align 2 aligns the next value ona word boundary |

#### **Registers**
|Register Number | Register Name| Description|
|---|---|---|
| 0 | $zero | The value 0 |
| 2-3 | $v0-$v1 | Values from expression evaluation and function results |
| 4-7 | $a0-$a3 | (arguments) First four parameters for subroutine |
| 8-15, 24-25 | $t0-$t9 | Temporary variables |
| 16-23 | $s0-$s7 | Saved values representing final computed results |
| 31 | $ra | Return address |

#### **MARS(MIPS Assembler/Simulator) Tutorial**
**1. Input the Tutorial program**  

1.1) Open the MARS program and click from the file menu choose “File...New”. A 
black document will open which you can enter your assembly code into. Click 
“File...Save As” and save the file as “Tutorial1.asm ”.   

1.2) Enter the code as shown below into the editor and save the file.

```v
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

<img src="/img/mips1-image-0093.png">  

1.4) From the menu, choose “Run...Assemble”.  The “Mars Messages” window at the 
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

3.2) One of the primary tools used to debug a program is setting a breakpoint.  You can 
break before execution of an instruction by clicking on the checkbox associated 
with each instruction on the far left of the execute window.  Set a breakpoint at 
the instruction:  addi $t0,$t0,1   

3.3) Run the program until the breakpoint by clicking “Run”.  At this point in the 
program only the first loop iteration has been printed. (You will need to click 
back to the Run/IO window to see the output.)  

3.4) Now use the “Trace Into” button to step through the loop that prints out the next line 
of text one character at a time.  Step through the instructions until “Loop #2” is 
printed to the output window.  Stop and find the value of the registers “t0” and 
“pc” at that point? Has the line of code that the program counter points to executed 
yet?  

3.5) The simulator also allows you to view the memory contents.  The memory window 
appears in the middle of the screen and is titled “Data Segment”. Remove the 
earlier breakpoint and add a breakpoint to line 33, “syscall”. Click the run button 
so that the program executes up until the new breakpoint. We  are now in the code 
right before “Loop #” is about to be printed for the third iteration. Notice that the $a0 register is now a pointer to the address where the “Loop #” text is stored. What 
is the memory location the register is pointing to?  

3.6) Now look in the data segment area, and find the address $a0 points to. This is the 
memory section where the characters of the text “Loop #” is stored.  Using an 
ASCII table find the address where the ‘p’ in “Loop” is located?   

3.7) Exercise: Can you find where the word “Welcome” is stored in the memory?   

<img src="/img/mips1-image0120.png">  

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

```v
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
```v
5
1020305
-- program is finished running --
```

**5. Adding integers**

Integers can be added in two ways, either by adding fixed or immediate values to an
integer value stored in a register, or by adding two integers that are both stored in registers.
Both methods to add integers are demonstrated below:

_Code to add integer values stored in registers:_
```v
.text 
addi  $t0, $t1, 5   #t0=t1+5  
add $t2, $t2, $t1   #t2=t2+t1 
addi  $t1, $zero, 5   #t1=0+5 
add   $t2, $zero, $t1    #t2=0+t1  
```

**6. Subtracting integers**

Unlike addition, values can only be subtracted if they are stored in a register.

_Code to subtract integer values stored in registers:_
```
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
```
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

```
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

    ``` Runtime exception at 0x0040002c: invalid integer input (syscall 5)```

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

## **String Operations**

Strings in MIPS can be declared as constant in the _.data_ part of the program. They are often stored
this way so that they can be used as user prompts or to format output of a program. Strings can also
be entered by the user during the runtime of the program. Both methods of using strings in MIPS
will be demonstrated below.

**1. Entering string constants**

Pre-determined strings enclosed by double quotes can be declared in the _.data_ section.

_Code to store the string “enter an element:” in memory under the name “message”:_

```
.data 
message: .asciiz “enter an element:”  
```
**2. Enter strings as input from the user**

To enter strings as input, the syscall code to be used is 8. Apart from that, the address of the
memory space into which the string must be entered, is loaded into the $a0 register. The
maximum size of the string must also be loaded into the $a1 register before performing the
syscall.

_Code to read a string as input from the user:_

```
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
```
.text 
li $v0, 4 
la $a0, output 
syscall 
```
We have now learnt how to declare strings constants as well as how to store strings entered
by the user. We shall now write a program combining both the concepts for a more robust
understanding of basic string operations.

_Code to read a string, with prompts instructing the user:_

```
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

```
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

```
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

```
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
```
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
    ```
      c.eq.d $f4, $f6
      bc1.f label
    ```
- For greater than and greater than and equal to, it is simpler to reverse the input registers.
    Ex. We need to branch to label if $f4 if greater than $f6. This can be written as
    ```
      c.le.d $f6 , $f4
      bc1.t label
    ```

### **Sample Question 2**
Given an array of floating numbers of size n, print the maximum and minimum element


```
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

```
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

## Integer Arrays

An Integer Array is continuous storage block in memory in which each element is an integer. Each
element of an array is accessed using the base address of the array and the index of the element we
must access.

### **Declaration and Initialization**

Integer arrays can be initialized using .word or an empty array can be declared using
the .space keyword inside the .data section of the program

```
data: 
arr: .word 3,4,-5,6    #initialized an array arr=[3,4,-5,6] 
arr2: .space 40  # empty array with 40 bytes reserved for arr2 
```

### **Array Traversal**

Array traversal refers to accessing each element of the array using its index.

Each integer element of an array occupies a word (4 bytes). Therefore,4 bytes needed to be added to the current address to obtain the address of the following element.

_Address of arr [k] = base address of arr + 4 * k_

Eg: To access arr[3] and store it to $t

```
a $s0,arr   # base add address of array is stored in $s0 
addi $s0,$s0,12    #  $s0 = address of arr[3] = arr + 4 * 3 
lw $t2,0($s0)    # $t2=arr[3]
```
or
```
a $s0,arr   # base add address of array is stored in $s0 
lw $t2,12($s0)  # $t2=value of (arr + 12) 
```

### **Array Input**

The elements of an integer array can be received from the user using the syscall for
integer input and a for loop.

_An empty array must be declared in the .data by allocating the necessary space as shown before._

_Each integer element of an array occupies 4 bytes. Therefore, 4 bytes needed to be added to the current address after each insertion._

The following code segment can be used to create an array of size n by receiving inputs from the user:

Assume $s1 contains n, $s0 contains base address of an empty array and $t0 is the loop counter

```
for: 
  beq $t0,$s1,exit      # loop termination condition 
  sll $t1,$t0,2         # $t1=i*4 
  add $t1,$t1,$s0   # $t1 = arr + i * 4         
       
  li $v0,5           # input integer and store in $t2 
  syscall 
  move $t2,$v0 
  sw $t2,0($t1)      # $t2 = arr[i] 
  addi $t0,$t0,1     # increment loop counter i 
  j for 
```

### **Printing an Integer Array**

Integer Array can be printed by traversing each element by using array traversal rules (as discussed above) and integer printing (code 1 is loaded to $v0).

Consider the following code snippet to print the array created in the previous example in which every element is provided by the user:

```
la $s0,arr             # store base address of array in $s0 
li $t0,0 
print: 
  beq $t0,$s1,end  
  sll $t1,$t0,2       # array traversal to access arr[i] 
  add $t1,$t1,$s0 
  lw $t2,0($t1)       # $t2=arr[i] 
  li $v0,1            # 1 is the syscall number to print integers 
  move $a0,$t2         # print $t2   
  syscall 
    
  li $a0, 32     # 32 is the ASCII code for space  
  li $v0, 11          # syscall number for printing character 
  syscall 
  addi $t0,$t0,1 # increment loop counter 
  j print 
end:                         
li $v0,10   #end program        
syscall
```

### **Negative Numbers as Elements**

All integer operations in MIPS support both positive and negative numbers. No changes are required to the program for the input and output of positive integers.

```
enter array element: -5 
enter array element: -6 
enter array element: 8 
enter array element: -2 
The elements of the array are: -5.0 -6.0 8.0 -2.0  
-- program is finished running --
```

### **Floating Point Numbers as Elements**

An array of floating-point numbers can be created by replacing all the integer
operations with floating-point operations. The following changes need to be made to
convert an integer array into an array of floating-point numbers:

1) Replace the integer code loaded to $v0 by floating-point code  
2) Replace the load, store and move operation by l.s , s.s and mov.s where floating point data type is used

```
# program to input array 
for: 
  beq $t0,$s1,exit
  sll $t1,$t0,2
  add $t1,$t1,$s0  
  li $v0,6          # code for floating point input 
  syscall
  s.s $f0,0($t1)    # arr[i]=$f0 
  addi $t0,$t0,1 
  j for  
exit: 

# print array 
print: 
  beq $t0,$s1,end  
  sll $t1,$t0,2       
  add $t1,$t1,$s0 
  l.s $f0,0($t1)       # $f0=arr[i] 
  li $v0,2           # code for printing floating point 
  mov.s $f12,$f0   
  syscall 
  li $a0, 32           
  li $v0, 11           
  syscall 
  addi $t0,$t0,1  
  j print 
end
```

### **One Dimensional Arrays**

#### **To calculate the sum of n numbers in an n sized array**

```
li $t0,0 
la $s0,arr 
li $t3,0        #t3 stores the sum 
sum:          #for loop 
  beq $t0,$s1,end     # $s1 contains n 
  sll $t1,$t0,2              
  add $t1,$t1,$s0 
  lw $t2,0($t1)      # $t2=arr[i] 
  add $t3,$t3,$t2    # $t3=$t3+$t2 
  addi $t0,$t0,1     # increment loop counter 
  j sum 
end:                 
li $v0,1              # print sum 
move $a0,$t3                 
syscall 
```

#### **To find the largest element in an n sized array**

```
la $s0,arr 
li $t0,0 
li $t3,-1000 # $t3=max 
  # initialized to -1000   
max: 
  beq $t0,$s1,end # $s1 contains n 
  sll $t1,$t0,2              
  add $t1,$t1,$s0 
  lw $t2,0($t1)  # $t2=arr[i] 
  ble $t2,$t3,inc_i  # if arr[i]<=max, jump to inc_count 
  move $t3,$t2   # if arr[i]>max, max=arr[i] 
  inc_count: 
    addi $t0,$t0,1  # increment loop counter 
    j max 
end:  
li $v0,1                  # print max 
move $a0,$t3                 
syscall
```

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

```
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

```
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

## **Two Dimensional Arrays**

2-DArrays/Matrices/Tables aren’t stored in memory the way it is normally visualized; rather it is stored as a single array in either row major form or column major form. Let’s see how a matrix is represented in memory in both the forms with a starting address of 1230. (Remember:In an array each element is 4 bytes long).

a) Row Major form : Here elements are stored row wise. First  we store the first row, then the second and soon.  

<img src="/img/mips2-image-0007.png">

b) Column Major form: Here elements are stored column wise. First we store the first column, then the second and soon.  

Row Major form ( starting address 1000 )

<img src="/img/mips2-image-0004.png">

Column Major form ( starting address 1000 )

<img src="/img/mips2-image-0006.png">

### **Sample code**

_->Insertion of elements and printing the 2D-array_

_**We are using row major form to input the elements as a string_

_**NOTE: all characters need to be space separated, the end of the sequence also need to have a space_

### **Pseudo code->**

```
Prompt user for number of rows and columns
Initialize 2D array
Prompt user to enter matrix values as a string
Loop through input string:
- Extract numbers delimited by spaces
- Convert each substring to integer and store in the 2D array
Print the matrix:
- Loop through rows:
- Loop through columns:
- Print each element of the matrix
- Print a space between elements
- Print a newline after each row
Exit the program
```
### **MIPS Code->**

```
.data
newline: .asciiz "\n"
space: .asciiz " "
msg_rows: .asciiz "Enter number of rows : "
msg_columns: .asciiz "Enter number of columns : "
msg_input: .asciiz "Enter matrix ( row major form ) : "
mat1: .space 100
input: .space 100

.text
main:
  li $v0, 4
  la $a0, msg_rows
  syscall
  
  li $v0, 5
  syscall
  move $t0, $v0         # $t0 = number of rows

  li $v0, 4
  la $a0, msg_columns
  syscall

  li $v0, 5
  syscall
  move $t1, $v0         # $t1 = number of columns

  li $v0, 4
  la $a0, msg_input
  syscall
  
  li $v0, 8 # syscall for read_str
  la $a0, input # Load address of input buer
  li $a1, 100 # Maximum length
  syscall

  la $t2, input
  la $t3, mat1

  li $t5, 0

  # t2 - address of input string
  # t3 - address of matrix
  # t4 - used to iterate through string
  # t5 - used to calculate number

input_loop:
  lb $t4, 0($t2)
  beq $t4, 32, store

# when a space is detected add the number calculated to the array and continue

  beq $t4, $zero , end_input

#In ASCII encoding, the decimal value 32 corresponds to the space character (' ')

#This loop exist to calculate numbers that have more than one digit , since our input is a string.

# We need to iterate and add the characters until we detect a space

  sub $t6 , $t4, 48 # converts character to integer

# for calculating the number
  
  mul $t5, $t5, 10
  add $t5, $t5, $t6
  addi $t2, $t2, 1
  
  j input_loop
store:
  sw $t5, 0($t3) #store the number obtained in the 2D-array
  
  addi $t3, $t3, 4 #increment the address to next memory block
  li $t5, 0

  add $t2 , $t2 , 1 #increment the index of string
  j input_loop #loop back to the input to continue iteration of string

end_input :
  li $t6 , 0 # Initialize row index
  la $t8, mat1 # Load address of array for printing
  
  li $v0, 4
  la $a0, newline
  syscall

print_loop:
  beq $t6 , $t0 , end_programme
  li $t7 , 0 # Initialize column index

print_column_loop:
  lw $t9 , 0($t8) # Load number from array
  li $v0, 1 # syscall for print_int
  move $a0, $t9 # Load number to print
  syscall

  li $v0, 4 # syscall for print_str 
  la $a0, space # Load address of space
  syscall

  addi $t7, $t7, 1 # Increment column index
  addi $t8 , $t8 , 4 # Increment base address
  blt $t7, $t1 , print_column_loop # Print all elements in the row

# Print newline after each row
  
  li $v0 , 4
  la $a0 , newline
  syscall

# Reset column index for next row
  li $t7 , 0

# Increment row index
  addi $t6 , $t6 , 1

  j print_loop
  
end_programme :
  li $v0, 10 # syscall for exit
  syscall
```
### **Output**
```
  Enter number of rows:3
  Enter number of columns:3
  Enter matrix(row major form) : 1 2 3 4 5 6 7 8 9

  1 2 3 
  4 5 6 
  7 8 9
```

### **->To find maximum and minimum element in a 2-D array**

**We are using row major form to input the elements as a string

**same process of taking the input as the above

__**NOTE: all characters need to be space separated, the end of the sequence also need to have a space__

#### **Pseudo code->**

```
Prompt user for number of rows and columns
Initialize 2D array
Prompt user to enter matrix values as a string
Loop through input string:
- Extract numbers delimited by spaces
- Convert each substring to integer and store in the 2D
array
Find minimum and maximum elements in the matrix:
- Initialize minimum element to maximum possible value
and maximum element to 0
- Loop through each element of the matrix:
- Update minimum and maximum elements if necessary
Print the maximum element message:
- Print "The maximum element is: "
- Print the maximum element
Print the minimum element message:
- Print "The minimum element is: "
- Print the minimum element
Exit the program
```

### **MIPS Code->**

```
.data
newline: .asciiz "\n"
space: .asciiz " "
msg_rows: .asciiz "Enter number of rows : "
msg_columns: .asciiz "Enter number of columns : "
msg_input: .asciiz "Enter matrix ( row major form ) : "
maximum : .asciiz"The maximum element is : "
minimum : .asciiz"The minimum element is :
mat1: .space 100
input: .space 100
.text
main:
  li $v0, 4
  la $a0, msg_rows
  syscall
  
  li $v0, 5
  syscall
  move $t0, $v0 # $t0 = number of rows
  
  li $v0, 4
  la $a0, msg_columns
  syscall
  
  li $v0, 5
  syscall 
  move $t1, $v0 # $t1 = number of columns
  
  li $v0, 4
  la $a0, msg_input
  syscall
  
  li $v0, 8 # syscall for read_str
  la $a0, input # Load address of input buer
  li $a1, 100 # Maximum length
  syscall

  la $t2, input
  la $t3, mat1
  
  li $t5, 0
  
  # t2 - address of input string
  # t3 - address of matrix
  # t4 - used to iterate through string
  # t5 - used to calculate number

input_loop:
  lb $t4, 0($t2)
  beq $t4, 32, store

  # when a space is detected add the number calculated to the array and continue
  
  beq $t4, $zero , end_input
  
  #In ASCII encoding, the decimal value 32 corresponds to the space character (' ')
  
  #This loop exist to calculate numbers that have more than one digit , since our input is a string
  # we need to iterate and add the characters until we detect a space
  
  sub $t6 , $t4, 48 # converts character to integer

  # for calculating the number
  mul $t5, $t5, 10
  add $t5, $t5, $t6
  addi $t2, $t2, 1
  j input_loop

store:
  sw $t5, 0($t3) #store the number obtained in the 2D-array
  addi $t3, $t3, 4 #increment the address to next memory block
  li $t5, 0
  add $t2 , $t2 , 1 #increment the index of string
  j input_loop #loop back to the input to continue iteration of string

end_input :
  li $t6 , 0 # Initialize row index
  la $t8, mat1 # Load address of array for printing
  li $v0, 4
  la $a0, newline
  syscall

find_min_max:
  li $t3 , 0 # Initialize max element to 0
  li $t2 , 0xffffffff
  li $t6 , 0 # Initialize row index to 0
  la $a0 , mat1

row_loop:
  beq $t6, $t0 , end # If all rows have been checked, exit
  
  li $t7, 0 # Initialize column index to 0 

column_loop:
  beq $t7, $t1 , end_column_loop # If all columns have been checked, move to next row
  
  lw $t8, 0($a0) # Load current element from array

# Compare current element with max element and the min element
  bgt $t8, $t3, update_max # if element greater than max element , update max
  
  min :
  blt $t8 , $t2 , update_min # if element smaller than min element, update min
  
  increment :
  addi $a0, $a0, 4 # Move to next column
  addi $t7, $t7, 1 # Increment column index
  j column_loop

update_max:
  move $t3 , $t8 # Update max element
  j min # control goes back to checking for the conditional statement of min element

update_min:
  move $t2 , $t8 # Update min element
  j increment # control goes back to incrementing the looping values

End_column_loop:
  addi $t6, $t6, 1 # Increment row index
  j row_loop

end :
  li $v0 , 4
  la $a0 , maximum  
  syscall
  
  li $v0 , 1
  move $a0 , $t3 # printing the maximum element
  syscall
  
  li $v0 , 4
  la $a0 , newline
  syscall
  
  li $v0 , 4
  la $a0 , minimum # printing the minimum element
  syscall

  li $v0 , 1
  move $a0 , $t2
  syscall
  
  li $v0 , 10
  syscall
```
### **Output**
```
  Enter number of rows :3
  Enter number of columns :3
  Enter matrix ( row major form ) : 1 2 34 5 6 7 300 9 22

  The maximum element is : 300
  The minimum element is : 1
```

### **More Questions**

  _->Searching in Matrix: Write a MIPS assembly program to search for a given element in a matrix and return its position if found._

  _->Matrix Addition: Write a MIPS program to add two matrices of the same size_

  _->Transpose of a Matrix: Write a MIPS assembly program to find the transpose of a given matrix._


★ **MIPS code for if statements**
  ● Iftheconditionisanequalityusebeq,bne
  ● Iftheconditionisacomparisoncombinebeq/bnewithset-on-less-than


**Why not blt or bge?**
  While blt and bge (pseudo-instructions) are available in MIPS, beq and bne are favoured inconditional statements for their efficiency making them the common choice.

**Example 1)** Given,f:$s0, g:$s1, h:$s2, i:$s3, j:$s4
```
  if(i==j)
    f = g + h;
  else
    f = g - h;
```

**Solution 1 :-** Corresponding MIPS code
```
  bne $s3, $s4, else
  add $s0, $s1, $s2
  j endif
else: sub $s0, $s1, $s2
endif: ...........
```
**Example 2)** Given,f:$s0 ,g:$s1 ,h:$s2 ,i:$s3 ,j:$s4
```
  if(i<j)
    f=g+h;
  else
    f=g-h;
```

**Solution 2 :-** Corresponding MIPS code
```
  slt $to, $s3, $s4
  beq $to, $zero, else
  add $s0, $s1, $s2
  j endif
else:
  sub $s0, $s1, $s2
endif: .......
```

★ **MIPS code for Loop statements**

Although there are said to be 3 different types of loops in C namely, do/while, while and for loop, they are all functionally identical. In other
words, you can take any for-loop and easily turn it into a while-loop. 

```asm
  int i;
  for(i= 0 ;i< 10 ;i++){
    loopbody;
  }
```
or
```asm
  inti=0;
  while(i< 10 ){
    loopbody;
    i++;
  }
```

**Example 1)** Given, i:$s3, k:$s
```asm
  while(i < j)
    i+=1;
```

**Solution 1 :-** Corresponding MIPS code
```asm
loop:
  slt $t0, $s3, $s4
  beq $t0, $zero, exit
  addi $s3, $s3, 1
  j loop

exit: ...
```

**Example 2)** Given i:$t0, k is some integer
```asm
  int i;
  for(i = 0; i < k; i++){
    // loop body
  }
```

**Solution 2 :-** Corresponding MIPS code
```asm
  add $t0, $zero, $zero # i is initialized to 0, $t0 = 0
Loop: // loop body
  addi $t0, $t0, 1 # i ++
  slti $t1, $t0, 4 # $t1 = 1 if i < 4
  bne $t1, $zero, Loop # go to Loop if i < 4
```

**Example 3)** Given, i:$s3, base address of arr:$s6, k:$s
```asm
  while(arr[i] == k)
    i+=3;
```

**Solution 3 :-** Corresponding MIPS code

```asm
loop:
  sll $t0, $s3, 3
  add $t1, $t0, $s6
  lw $t2, 0($t1)
  bne $t2, $s5, exit
  addi $s3, $s3, 1
  j loop

exit:...
```

★ **Procedures in MIPS**

Understanding the memory layout and the way procedures are called is crucial for writing efficient and correct MIPS assembly code.

➢ Memory Layout

<img src="/img/mips2-image-0008.png">

➢ Stack allocation (refer Recursion in MIPS(non-leaf procedure) for detailed explanation)

<img src="/img/mips2-image-0010.png">

(a) before, (b) during, and (c) after a procedure call.

There are two types of procedure calling-

**1) Leaf Procedures:** These procedures do not call other procedures.

When a leaf procedure is called:

● There turn address is saved on the stack.
● A stack frame/procedure frame/activation record is setup to store local variables.
● Arguments may be passed in registers or on the stack.
● The procedure executes its code.

Upon completion,it restores the stack pointer and returns to the saved return address.

**2) Non-leaf Procedures(NestedProcedures):** These procedures call other procedures, eg.- **Recursive Functions/Procedures.**

In addition to the steps for leaf procedures, non-leaf procedures must manage:

● Saving and restoring additional registers beyond there turn address.
● Managing multiple levels of procedure calls and returns.
● Ensuring that data in registers is preserved a cross nested calls.
● Properly handling there turn value from called procedures.

★ **Function (Procedure) calling in MIPS**


In MIPS assembly language, passing parameters to functions involves using
registers. Unlike high-level languages where parameters are often passed on the stack,MIPS typically uses specific registers for passing arguments.

● $a0 to $a3 :These are argument registers and are used to pass the first four arguments to a function. If a function has more than four parameters,additional parameters are typically passed on the stack.

● $v0 and $v1: These are value registers and are used to return values from functions. Functions can return up to two values using these registers.

<img src="/img/mips2-image-0009.png">

(Note:-i) Register 1, called $at, is reserved for the assembler.  
      ii) Registers 26–27, called $k0–$k1 are reserved for the operating system.)

➢ **Steps in calling a procedure (function)**

In MIPS assembly language, procedure calling follows a similar structure to function calls in high-level languages like C.

The following steps typically occur in both leaf and non-leaf functions but there are some nuances in how they're implemented, especially regarding the handling of the stack:

● **Arguments Passing** :.Arguments to the function can be passed via registers or the stack, depending on the calling convention. In register-based passing, arguments are loaded in to designated argument registers like $a0-$a3. If there are more arguments than available registers, excess arguments are typically passed on the stack.

● **Jump and Link (jal)** :jal makes the control jump to the given address while storing there turn address at PC+4 in the $ra register This effectively sets up the return mechanism for the function call.

● **Function Prologue (Non-leaf functions):** Non-leaf functions need to setup a stack frame. This involves: Saving the return address($ra)
on to the stack, saving any callee- saved registers on to the stack(these are typically $s0-$s7),setting up the frame pointer($fp) to establish a reference point for accessing local variables and saved registers.

● **Function Execution** :The function performs its task, accessing arguments, local variables, and performing computations.

**● Function Epilogue (Non-leaf functions):** Before returning, non-leaf functions need to cleanup the stack frame and restore the state of callee-saved registers.This involves restoring callee-saved registers from the stack, restoring the return address($ra) from the stack  resetting the stack pointer($sp) to deallocate the stack frame, jumping back to the return address using the jr $ra instruction.

● Return: Upon completing its task, the function returns control to the caller. If it's a leaf function, it typically involves jumping back to the return address stored in $ra using the jr $ra instruction. For non-leaf
 functions, the return sequence includes restoring the stack frame and registers before jumping back to the caller.

(Note:-For simplicity we will only use $sp and extend the stack at procedure entry/exit)

**Example 1)** Calling a procedure which prints a string
```asm
//code
printFunction();
a=a+2;
//code
```

**Solution 1 :-** Corresponding MIPS code
```asm
data
hello_string: .asciiz "Hello, world!\n" # String definition

.text
main:
....previous code
jal printFunction #jump to printFunction
addi $s2, 2
....further code
li $v0, 10 # Set syscall code 10 for exit
syscall # Perform syscall to exit the program

printFunction:
li $v0, 4 # Set syscall code 4 to print a string
la $a0, hello_string # Load the address of the string
syscall # Perform syscall to print
jr $ra # Return control to PC + 4
```

● When jal is used, the control moves to the address specified in the instruction and the address of the next instruction is stored in $ra.

● When the procedure ends jr $ra is used to return control back to the
next address from where it jumped.

● These procedures are usually placed after the “main” procedure to avoid instruction overlap.

**Example 1)** Calling a function with parameters
```asm
//code
result=addNumbers(5,7);
//code
```


**Solution 1 :-** Corresponding MIPS code
```asm
text
main:
  li $a0, 5 # Load first parameter (5) into $a0
  li $a1, 7 # Load second parameter (7) into $a1
  jal addNumbers # Jump to addNumbers function
  move $s0, $v0 # Store the result returned by addNumbers in $s0
  # Further code
  li $v0, 10 # Set syscall code 10 for exit
  syscall # Perform syscall to exit the program

addNumbers:
  add $v0, $a0, $a1 # Add the values of $a0 and $a1 and store the result in $v0
  jr $ra # Return control to the next instruction after jal
```

● In the main function, parameters are passed to the addNumbers function by loading values into registers $a0 and $a1.

● The jal instruction is used to jump to the addNumbers function.

● Inside the addNumbers function, the parameters are accessed from the $a0 and $a1 registers.

● The result of the addition is stored in register $v0, which is commonly used to return function results in MIPS.

● Finally, jr $ra is used to return control back to the instruction after the jal in the main function.

★ **Recursion in MIPS (non-leaf procedure)**

In MIPS assembly language, implementing recursion involves understanding function calls and stack manipulation.

**The Stack in MIPS Assembly**

● The stack is a crucial data structure used in MIPS assembly language for managing function calls, local variables, and return addresses.
● It operates based on the Last-In-First-Out (LIFO) principle, meaning the
last item pushed onto the stack is the first item to be popped off.

**Stack Operations:**

**Stack Pointer ($sp):**
● The stack pointer register, $sp, points to the top of the stack. It keeps track of the current position in memory where new items are pushed onto or popped off the stack.

**Push Operation:**
● To push data onto the stack, the stack pointer is decremented to reserve space for the new item, and then the data is stored at the memory location pointed to by the stack pointer.

**Pop Operation:**
● To pop data off the stack,the data is retrieved from the memory location
pointed to by the stack pointer, and then the stack pointer is incremented to remove the item from the stack.

**Stack Usage in Function Calls:**
**Function Prologue:**
● When a function is called, the current contents of relevant registers (such as there turn address and callee-saved registers) are typically saved on the stack to ensure they are preserved.
● This process is often referred to as the function prologue.

**Function Epilogue:**
● Upon completion of the function, the saved values on the stack are restored to their original registers.
● This process is known as the function epilogue.


**Example)** Function Call and Stack Usage

● When main calls my Function using jal, the return address (the address of the instruction following the function call) is automatically saved in register $ra.
● Inside my Function, the function prologue allocates space on the stack
to save the return address.
● The function body executes the desired operations.
● Finally, in the function epilogue, the return address is restored, and the stack space allocated in the prologue is deallocated before returning control to the caller.

To understand recursion in MIPS, a good understanding of the stack pointer and how it operates on memory is imperative. Recursion involves careful management of the function call stack, ensuring that return addresses and local variables are properly saved and restored. This example illustrates the process of calculating the factorial of a number using recursion in MIPS assembly language.

**Example) Calculating the factorial of a number using recursion**

```asm
//code
result = factorial(5);
//code
```

**Solution 1 :-** Corresponding MIPS code
```asm
text
main:
  li $a0, 5 # Load the value 5 (number whose factorial is to be calculated) into $a0
  jal factorial # Jump to the factorial function
  move $s0, $v0 # Store the result returned by factorial in $s0
  
  # Further code using the result stored in $s0
  # ...

  li $v0, 10 # Set syscall code 10 for exit
  syscall # Perform syscall to exit the program

factorial:
  # Function prologue
  addi $sp, $sp, -4 # Allocate space on the stack for local variables
  sw $ra, 0($sp) # Save the return address on the stack
  
  # Check for base case: if n <= 1, return 1
  li $t0, 1 # Load the value 1 into $t0
  ble $a0, $t0, base_case # Branch to base_case if $a0 (n) <= $t0 (1)

  # Recursive case: n * factorial(n - 1)
  addi $a0, $a0, -1 # Decrement $a0 (n) by 1
  jal factorial # Recursive call to factorial function
  lw $ra, 0($sp) # Restore the return address from the stack
  addi $sp, $sp, 4 # Deallocate space on the stack for local variables
  mul $v0, $a0, $v0 # Multiply n by the result of factorial(n - 1)
  jr $ra # Return control to the caller

base_case:
  # Base case: n <= 1, return 1
  li $v0, 1 # Load the value 1 into $v0
  lw $ra, 0($sp) # Restore the return address from the stack
  addi $sp, $sp, 4 # Deallocate space on the stack for local variables
  jr $ra # Return control to the caller
```

● In the main function, the value 5 is loaded into register $a0 to calculate its factorial.  
● The factorial function is then called using the jal instruction.  
● Inside the factorial function, the base case checks if the input value n is less than or equal to 1.If so,it returns 1.    
● Otherwise,the function decrements n by 1 and recursively calls itself
with the decremented value.  
● The result of the recursive call is then multiplied by n to compute the factorial.
● Finally,the result is returned to the caller using register $v0.




### **References**
J.L.Hennessy and D.A.Patterson Computer Organization and Design:The Hardware/Software Interface, Fifth Edition  
“Digital Logic and Computer Design” by M.Morris Mano
“Digital Fundamentals” by Thomas L.Flyod
[http://www.cs.missouristate.edu/MARS/](http://www.cs.missouristate.edu/MARS/)
[https://www.d.umn.edu/~gshute/mips/directives-registers.pdf](https://www.d.umn.edu/~gshute/mips/directives-registers.pdf) 
[https://courses.missouristate.edu/KenVollmar/mars/Help/SyscallHelp.html](https://courses.missouristate.edu/KenVollmar/mars/Help/SyscallHelp.html) 
[https://courses.missouristate.edu/KenVollmar/mars/Help/MarsHelpIntro.html](https://courses.missouristate.edu/KenVollmar/mars/Help/MarsHelpIntro.html) 
[https://riptutorial.com/mips/example/29993/mars-mips-simulator](https://riptutorial.com/mips/example/29993/mars-mips-simulator) 
[https://bytes.usc.edu/files/ee109/documents/MARS_Tutorial.pdf](https://bytes.usc.edu/files/ee109/documents/MARS_Tutorial.pdf) 
