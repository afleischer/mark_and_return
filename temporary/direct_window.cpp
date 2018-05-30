#include <iostream>
#include <stdio.h>
#include <cstdlib>
#include <windows.h>
#include <winuser.h>
#include <conio.h>
#include <string>

#include <node.h>



void WindowsGet(const v8::FunctionCallbackInfo<v8::Value>& args){ //Gives us access to functions called in JavaScript file 
                        //(that presumably was linked to)
                        //LETS US USE ARGUMENTS (args) FROM OUR JAVASCRIPT FILE WITHIN THE FUNCTION

	//gives us acess to arguments called in function within JavaScript file}

	v8::Isolate* isolate = args.GetIsolate();  //Isolate = "isolated instance" of v8 engine.  
    //Basically, we get a version of v8 to do our bidding below
    // .:. Accesses the "scope" of JavaScript file 

	int i;

    string windowToLocate = args;


	LPCTSTR WindowName = "Calculator";
	HWND Find = ::FindWindowEx(0, 0, "MozillaUIWindowClass", 0);
    if(Find)
    {
        printf("FOUND\n");
        getch();
    }
    else{
        printf("NOT FOUND");
        getch();
    }
    
    //std::cout << "Windows Handle is:" << std::endl;
    //std::cin >> Find;
    //std::cout << Find;


    //Need to convert C++ data types into v8-recognized (i.e. Javascript-recognized) data

}

void Initialize(v8::Local<v8::Object> exports){
	NODE_SET_METHOD(exports, "WindowsGet", WindowsGet);  //We're exporting our function to use in our JS program
}

NODE_MODULE(addon, Initialize)


//compile it first before using!!