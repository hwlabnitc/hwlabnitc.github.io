import{_ as s,a as i,b as a,c as r,d as n,e as d,i as o,f as l,g as h,h as p}from"./chunks/mips1-image0120.CiesK1B4.js";import{_ as c,c as u,a as e,a4 as m,j as t,o as g}from"./chunks/framework.DRnJpP2i.js";const U=JSON.parse('{"title":"MIPS","description":"","frontmatter":{},"headers":[],"relativePath":"MIPS/mips_syscalls&tutorial.md","filePath":"MIPS/mips_syscalls&tutorial.md"}'),k={name:"MIPS/mips_syscalls&tutorial.md"},b=m("",51),$=t("img",{src:s},null,-1),y=t("img",{src:i},null,-1),E=t("img",{src:a},null,-1),f=t("img",{src:r},null,-1),w=t("img",{src:n},null,-1),_=t("img",{src:d},null,-1),v=t("p",null,[t("strong",null,"3. Using the Debugging Tools")],-1),S=t("p",null,"3.1) When a program does not work as expected you will need to use the debugging tools provided with the simulator.",-1),C=t("p",null,"3.2) One of the primary tools used to debug a program is setting a breakpoint. You can break before execution of an instruction by clicking on the checkbox associated with each instruction on the far left of the execute window. Set a breakpoint at the instruction: addi $t0,$t0,1",-1),x=t("p",null,"3.3) Run the program until the breakpoint by clicking “Run”. At this point in the program only the first loop iteration has been printed. (You will need to click back to the Run/IO window to see the output.)",-1),A=t("p",null,"3.4) Now use the “Trace Into” button to step through the loop that prints out the next line of text one character at a time. Step through the instructions until “Loop #2” is printed to the output window. Stop and find the value of the registers “t0” and “pc” at that point? Has the line of code that the program counter points to executed yet?",-1),q=t("p",null,"3.5) The simulator also allows you to view the memory contents. The memory window appears in the middle of the screen and is titled “Data Segment”. Remove the earlier breakpoint and add a breakpoint to line 33, “syscall”. Click the run button so that the program executes up until the new breakpoint. We are now in the code right before “Loop #” is about to be printed for the third iteration. Notice that the $a0 register is now a pointer to the address where the “Loop #” text is stored. What is the memory location the register is pointing to?",-1),P=t("p",null,"3.6) Now look in the data segment area, and find the address $a0 points to. This is the memory section where the characters of the text “Loop #” is stored. Using an ASCII table find the address where the ‘p’ in “Loop” is located?",-1),F=t("p",null,"3.7) Exercise: Can you find where the word “Welcome” is stored in the memory?",-1),D=t("img",{src:o},null,-1);function I(T,M,R,N,B,L){return g(),u("div",null,[b,e(" Run the program. If a breakpoint has been set the program will stop at the next breakpoint. "),$,e(" Trace (Step) Into. Executes a single instruction. If the instruction is a procedure call (jal) the simulator will stop at the first instruction of the procedure. "),y,e(" Backstep. Undo the last step taken in the code. "),E,e(" Pause the currently running program. Press the run button to continue execution. "),f,e(" Stop the currently running program. You will need to reset the simulator to execute the program again after stopping it. "),w,e(" Reset. Resets the simulator, reinitializing the registers, program counter, and memory. "),_,e(" Adjusts the speed that the simulator runs at. "),v,S,C,x,A,q,P,F,D])}const H=c(k,[["render",I]]);export{U as __pageData,H as default};
