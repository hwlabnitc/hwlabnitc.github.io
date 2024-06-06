# MIPS Arrays

## Integer Arrays
 
An Integer Array is continuous storage block in memory in which each element is an integer. Each
element of an array is accessed using the base address of the array and the index of the element we
must access.

### Declaration and Initialization

Integer arrays can be initialized using .word or an empty array can be declared using
the .space keyword inside the .data section of the program

```asm
data: 
arr: .word 3,4,-5,6    #initialized an array arr=[3,4,-5,6] 
arr2: .space 40  # empty array with 40 bytes reserved for arr2 
```

### Array Traversal

Array traversal refers to accessing each element of the array using its index.

Each integer element of an array occupies a word (4 bytes). Therefore,4 bytes needed to be added to the current address to obtain the address of the following element.

_Address of arr [k] = base address of arr + 4 * k_

Eg: To access arr[3] and store it to $t

```asm
a $s0,arr   # base add address of array is stored in $s0 
addi $s0,$s0,12    #  $s0 = address of arr[3] = arr + 4 * 3 
lw $t2,0($s0)    # $t2=arr[3]
```
or
```asm
a $s0,arr   # base add address of array is stored in $s0 
lw $t2,12($s0)  # $t2=value of (arr + 12) 
```

### Array Input

The elements of an integer array can be received from the user using the syscall for
integer input and a for loop.

_An empty array must be declared in the `.data` by allocating the necessary space as shown before._

_Each integer element of an array occupies 4 bytes. Therefore, 4 bytes needed to be added to the current address after each insertion._

The following code segment can be used to create an array of size n by receiving inputs from the user:

Assume `$s1` contains n, `$s0` contains base address of an empty array and $t0 is the loop counter

```asm
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

### Printing an Integer Array

Integer Array can be printed by traversing each element by using array traversal rules (as discussed above) and integer printing (code 1 is loaded to `$v0`).

Consider the following code snippet to print the array created in the previous example in which every element is provided by the user:

```asm
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

### Negative Numbers as Elements

All integer operations in MIPS support both positive and negative numbers. No changes are required to the program for the input and output of positive integers.

```asm
enter array element: -5 
enter array element: -6 
enter array element: 8 
enter array element: -2 
The elements of the array are: -5.0 -6.0 8.0 -2.0  
-- program is finished running --
```

### Floating Point Numbers as Elements

An array of floating-point numbers can be created by replacing all the integer
operations with floating-point operations. The following changes need to be made to
convert an integer array into an array of floating-point numbers:

1) Replace the integer code loaded to $v0 by floating-point code  
2) Replace the load, store and move operation by l.s , s.s and mov.s where floating point data type is used

```asm
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

## One Dimensional Arrays

### To calculate the sum of n numbers in an n sized array

```asm
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

### To find the largest element in an n sized array

```asm
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

## Two Dimensional Arrays

2-DArrays/Matrices/Tables aren’t stored in memory the way it is normally visualized; rather it is stored as a single array in either row major form or column major form. Let’s see how a matrix is represented in memory in both the forms with a starting address of 1230. (Remember:In an array each element is 4 bytes long).

a) Row Major form : Here elements are stored row wise. First  we store the first row, then the second and soon.  

<img src="/img/mips2-image-0007.png">

b) Column Major form: Here elements are stored column wise. First we store the first column, then the second and soon.  

Row Major form ( starting address 1000 )

<img src="/img/mips2-image-0004.png">

Column Major form ( starting address 1000 )

<img src="/img/mips2-image-0006.png">

### Sample code

_->Insertion of elements and printing the 2D-array_

_We are using row major form to input the elements as a string_

_NOTE: all characters need to be space separated, the end of the sequence also need to have a space_

### Pseudo code

```asm
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
### MIPS Code

```asm
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
### Output
```asm
  Enter number of rows:3
  Enter number of columns:3
  Enter matrix(row major form) : 1 2 3 4 5 6 7 8 9

  1 2 3 
  4 5 6 
  7 8 9
```

### To find maximum and minimum element in a 2-D array

We are using row major form to input the elements as a string

same process of taking the input as the above

__NOTE: all characters need to be space separated, the end of the sequence also need to have a space__

#### Pseudo code

```asm
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

### MIPS Code

```asm
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
### Output
```asm
  Enter number of rows :3
  Enter number of columns :3
  Enter matrix ( row major form ) : 1 2 34 5 6 7 300 9 22

  The maximum element is : 300
  The minimum element is : 1
```

### More Questions

  _->Searching in Matrix: Write a MIPS assembly program to search for a given element in a matrix and return its position if found._

  _->Matrix Addition: Write a MIPS program to add two matrices of the same size_

  _->Transpose of a Matrix: Write a MIPS assembly program to find the transpose of a given matrix._