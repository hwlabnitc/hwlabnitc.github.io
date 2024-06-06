# **MIPS**
## **Setting up the Code Editor** 
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