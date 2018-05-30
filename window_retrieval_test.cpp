#include <string>
#include <iostream>
#include <stdio.h>
#include <cstdlib>
#include <windows.h>
#include <winuser.h>
#include <conio.h>
#include <tchar.h>
#include <node.h>



HWND WindowsShow(const v8::FunctionCallbackInfo<v8::Value>& args){
	v8::Isolate* isolate = args.GetIsolate();


	std::string entry = args;


	HWND hWnds = FindWindow(NULL,_T(entry));


return hWnds;
}

void Initialize(v8::Local<v8::Object> exports){
	NODE_SET_METHOD(exports, "WindowsShow", WindowsShow);  //We're exporting our function to use in our JS program
}

NODE_MODULE(addon, Initialize)
