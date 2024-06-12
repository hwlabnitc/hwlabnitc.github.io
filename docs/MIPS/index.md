---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Welcome to the MIPS Guide
  text: ""
  tagline: This section covers the following topics

features:

    - icon: 📄
      title: Introduction to MIPS 
      details: Setting up and understanding MIPS ISA.
      link: '#introduction-to-mips'
    - icon: 🔢
      title: Basic Integer and String Handling 
      details: Learn the Basics of MIPS integers.
      link: '#basic-integer-and-string-handling'
    - icon: 🔗
      title: Integer Array Handling 
      details: Learn how to make integer arrays and operate them.
      link: '#integer-array-handling'
    - icon: 🔲
      title: 2-D Array Handling 
      details: Extend your array knowledge with 2-D arrays.
      link: '#_2-d-integer-array-handling'
    - icon: 🔤 
      title: Strings (Advanced) 
      details: String Handling explained in detail.
      link: '#string-handling-advanced'
    - icon: 📊
      title: Floating Points 
      details: Learn how to handle floating point numbers.
      link: '#floating-point-handling'

 
---

<!-- # Welcome to the MIPS Guide

This course covers the following topics-


* `Introduction to MIPS` - Setting up and understanding MIPS ISA.
* `Basic Integer and String Handling` - Learn the Basics of MIPS integers.
* `Integer Array Handling` - Learn how to make integer arrays and operate them.
* `2-D Array Handling` - Extend your array knowledge with 2-D arrays.
* `Strings (Advanced)` - String Handling explained in detail.
* `Floating Points` - Learn how to handle floating point numbers. -->

## Setting up MARS
:::tip Open
Main Documentation : [Click Here](./mips_setup.md)
:::
<iframe width="560" height="315" src="https://www.youtube.com/embed/FM-0bSelrjw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[View on Youtube](https://youtu.be/FM-0bSelrjw)

::: details Sample Code

```asm
# Program File: Tutorial1.asm
# Written by:   MoSaad
# Date Created: 10/05/2023
# Description:  Tutorial program to introduce MARS simulator  including: breakpoints, single-stepping, and register and memory windows.
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

[View on Github](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Intro%20to%20MIPS/First%20program/Tutorial1.asm)


## **Introduction to MIPS**
:::tip Open
Main Documentation : [Click Here](./mips_basics&procedures.md)
:::
<iframe width="560" height="315" src="https://www.youtube.com/embed/T40qoR7V6oU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[ View on Youtube ](https://youtu.be/T40qoR7V6oU)


## **Basic Integer and String Handling**
:::tip Open
Main Documentation (Integer) : [Click Here](./mips_integers&float.md)
:::
<iframe width="560" height="315" src="https://www.youtube.com/embed/R5UB4CnZo7Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[View on Youtube](https://youtu.be/R5UB4CnZo7Y)

### Sample Code:

| Topic                     | Sample Code Link                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Reversing 2 digit number  | [Sample Code](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Intro%20to%20MIPS/Integers%20and%20Strings_q1.asm) |
| Calculating Average Marks | [Sample Code](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Intro%20to%20MIPS/Integers%20and%20Strings_q2.asm) |
| Finding Spy Number        | [Sample Code](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Intro%20to%20MIPS/Integers%20and%20Strings_q3.asm) |

## **Floating Point Handling**
:::tip Open
Main Documentation : [Click Here](./mips_integers&float.md)
:::
| Topic                              | Sample Code Link                                                                         |
| ---------------------------------- | ---------------------------------------------------------------------------------------- |
| Fahrenheit to Celsius              | [Sample Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Floating%20point/Q1.asm) |
| Maximum and Minimum in Float Array | [Sample Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Floating%20point/Q2.asm) |
| Round off to n digits              | [Sample Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Floating%20point/Q3.asm) |

## **Integer Array Handling**
:::tip Open
Main Documentation : [Click Here](./mips_array.md)
:::
| Topic                                                   | Video Link                            | Sample Code Link                                                                                                                                               |
| ------------------------------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Introduction to Integer Arrays                          | [Video](https://youtu.be/tvaMA7D_cjo) | [Sample Code](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Integer%20arrays/MIPS_Integer%20Arrays_Sample%20Codes_1.asm)                                  |
| Sum of Elements of an Array                             | [Video](https://youtu.be/oYBOHah18Pw) | [Sample Code](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Integer%20arrays/MIPS_Integer%20Arrays_Practice%20Codes_1.asm)                                |
| Greatest Element in Array                               | [Video](https://youtu.be/xc4gQB3S2dg) | [Sample Code](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Integer%20arrays/MIPS_Integer%20Arrays_Practice%20Codes_2.asm)                                |
| Merge 2 Sorted Arrays                                   | [Video](https://youtu.be/IqFx7i-GqPI) | [Sample Code](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Integer%20Arrays%20Advanced/Integer_Array_Advanced_Practice_Q1_Merging_Two_Sorted_Arrays.asm) |
| Highest and Lowest occurrence of an element in an array | [Video](https://youtu.be/1tUfRNTi1t4) | [Sample Code](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Integer%20Arrays%20Advanced/Integer_Array_Advanced_Practice_Q2_Highest_Lowest_Frequency.asm)  |
| Binary Search                                           | [Video](https://youtu.be/lKo10ZWYlDc) | [Sample Code](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Integer%20Arrays%20Advanced/Integer_Array_Advanced_Practice_Q3_BinarySearch.asm)              |
| Quicksort                                               | [Video](https://youtu.be/ywtvFJw4HQQ) | [Sample Code](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Integer%20Arrays%20Advanced/Integer_Array_Advanced_Practice_Q4_QuickSort.asm)                 |

---

### **2-D Integer Array Handling**
:::tip Open
Main Documentation : [Click Here](./mips_array)
:::
<iframe width="560" height="315" src="https://www.youtube.com/embed/SHl3shv24jc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[View on Youtube](https://youtu.be/SHl3shv24jc)

Sample Code:

| Topic               | Sample Code Link                                                                                                                                          |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Taking Input        | [Sample Code](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Two%20Dimensional%20Arrays/Two_Dimensional_Arrays_Sample_Q1_Taking_Input_For_Matrix.asm) |
| Printing a Matrix   | [Sample Code](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Two%20Dimensional%20Arrays/Two_Dimensional_Arrays_Sample_Q2_Printing_Matrix.asm)         |
| Sum of Two Matrices | [Sample Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Two%20Dimensional%20Arrays/Two_Dimensional_Arrays_Practice_Q1_sum_of_two_matrices.asm)    |

---

### **String Handling (advanced)**

| Topic                                             | Video Link                            | Sample Code Link                                                                                                                  |
| ------------------------------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Input/Output of Strings                           | [Video](https://youtu.be/R5UB4CnZo7Y) | [Sample Code](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Intro%20to%20MIPS/Integers%20and%20Strings_q2.asm)               |
| Traversal of Strings (Advanced string operations) | [Video](https://youtu.be/HiqgMrXHeyQ) | [Sample Code](https://github.com/hwlab-csed/MIPS-Codes/blob/main/Strings%20Advanced/MIPS_Strings%20Advanced_Sample%20Codes_1.asm) |
| Length of String                                  | [Video](https://youtu.be/GWlaAK4VdWo) | [Sample Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Strings%20Advanced/MIPS_Strings_Advanced_Practice_Q1.asm)         |
| Palindrome Check                                  | [Video](https://youtu.be/7mD-2DHDjEc) | [Sample Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Strings%20Advanced/MIPS_Strings_Advanced_Practice_Q2.asm)         |
| Concatenation of strings                          | [Video](https://youtu.be/SDeHKgsCJE8) | [Sample Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Strings%20Advanced/MIPS_Strings_Advanced_Practice_Q3.asm)         |

| Topic| Video Link | Sample Code Link |
| ---------------------------- | --------------------- | --- | 
| **Loops** | | | 
|  | LowerCase to UpperCase | [Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Loops/lower%20to%20uppercase.asm) | 
| **Procedure Calling** | | |  |
|  | Sum of two numbers | [Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Procedure%20Calling/Sum%20of%202%20numbers%20Q1.asm) |  |  
|  | Product of two numbers | [Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Procedure%20Calling/Product%20of%20two%20numbers%20Q2.asm) | [Video](https://youtu.be/7E7uyIC0oTw?si=9Q69iTm_x7MJe6Ul) |  
|  | Maximum of four numbers | [Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Procedure%20Calling/Max%20of%204%20numbers%20with%20function%20calling%20Q3.asm) |  
|  | Factorial of a number | [Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Procedure%20Calling/Calculate%20factorial%20iteratively%20Q4.asm) |  
| **Recursion Using JAL** | | |  |
|  | Binary search with recursion  | [Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Recursion%20Using%20JAL/Binary%20search%20with%20recursion%20Q4.asm) |  
|  | Factorial recursion | [Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Recursion%20Using%20JAL/Factorial%20recursion%20Q3.asm) | [Video](https://youtu.be/sJ55rgXjq2U?si=leQ5dD0YZz_jID_N) |  
|  | Find exponent recursively | [Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Recursion%20Using%20JAL/Find%20exponent%20recursively%20Q2.asm) |  
|  | Sum of first N natural numbers | [Code](https://github.com/hwlabnitc/MIPS-Codes/blob/main/Recursion%20Using%20JAL/Sum%20of%20first%20N%20natural%20numbers%20recursively%20Q1.asm) | 

