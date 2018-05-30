#include <iostream>
#include <stdio.h>
#include <cstdlib>
#include <windows.h>
#include <winuser.h>
#include <conio.h>
#include <string>

#include <node.h>

void WindowsMark(const v8::FunctionCallbackInfo<v8::Value>& args){
	v8::Isolate* isolate = args.GetIsolate();

	//set string to value passed in


	//Register a class to the currently active window


		//Global variable

		HINSTANCE hinst;  //handle to an instance (of the current window?  Let's see how used)

		//function prototypes

		int WINAPI WinMain(HINSTANCE, HINSTANCE, LPSTR, int);  //IWNAPI is the calling convention - Microsoft-specific 
						//others include __stdcall, __fastcall, etc.
						//Describes HOW arguments are passed to it and values are returned.
		InitApplication(HINSTANCE);
		InitInstance(HINSTANCE, int);
		LRESULT CALLBACK MainWndProc(HWND, UINT, WPARAM, LPARAM);

		//Application entry point
		int WINAPI WinMain(HINSTANCE hinstance, HINSTANCE hPrevInstance, 
			LPSTR lpCmdLine, int nCmdShow)
		{
			MSG msg;

			if (!InitApplication(hinstance))
				return FALSE;
			if (!InitInstance(hinstance, nCmdShow))
				return FALSE;

			BOOL fGotMessage;
			 while ((fGotMessage = GetMessage(&msg, (HWND) NULL, 0, 0)) != 0 && fGotMessage != -1) 
    { 
        TranslateMessage(&msg); 
        DispatchMessage(&msg); 
    } 
    return msg.wParam; 
        UNREFERENCED_PARAMETER(lpCmdLine); 
} 
 
BOOL InitApplication(HINSTANCE hinstance) 
{ 
    WNDCLASSEX wcx; 
 
    // Fill in the window class structure with parameters 
    // that describe the main window. 
 
    wcx.cbSize = sizeof(wcx);          // size of structure 
    wcx.style = CS_HREDRAW | 
        CS_VREDRAW;                    // redraw if size changes 
    wcx.lpfnWndProc = MainWndProc;     // points to window procedure 
    wcx.cbClsExtra = 0;                // no extra class memory 
    wcx.cbWndExtra = 0;                // no extra window memory 
    wcx.hInstance = hinstance;         // handle to instance 
    wcx.hIcon = LoadIcon(NULL, 
        IDI_APPLICATION);              // predefined app. icon 
    wcx.hCursor = LoadCursor(NULL, 
        IDC_ARROW);                    // predefined arrow 
    wcx.hbrBackground = GetStockObject( 
        WHITE_BRUSH);                  // white background brush 
    wcx.lpszMenuName =  "MainMenu";    // name of menu resource 
    wcx.lpszClassName = "MainWClass";  // name of window class 
    wcx.hIconSm = LoadImage(hinstance, // small class icon 
        MAKEINTRESOURCE(5),
        IMAGE_ICON, 
        GetSystemMetrics(SM_CXSMICON), 
        GetSystemMetrics(SM_CYSMICON), 
        LR_DEFAULTCOLOR); 
 
    // Register the window class. 
 
    return RegisterClassEx(&wcx); 
} 
 
BOOL InitInstance(HINSTANCE hinstance, int nCmdShow) 
{ 
    HWND hwnd; 
 
    // Save the application-instance handle. 
 
    hinst = hinstance; 
 
    // Create the main window. 
 
    hwnd = CreateWindow( 
        "MainWClass",        // name of window class 
        "Sample",            // title-bar string 
        WS_OVERLAPPEDWINDOW, // top-level window 
        CW_USEDEFAULT,       // default horizontal position 
        CW_USEDEFAULT,       // default vertical position 
        CW_USEDEFAULT,       // default width 
        CW_USEDEFAULT,       // default height 
        (HWND) NULL,         // no owner window 
        (HMENU) NULL,        // use class menu 
        hinstance,           // handle to application instance 
        (LPVOID) NULL);      // no window-creation data 
 
    if (!hwnd) 
        return FALSE; 
 
    // Show the window and send a WM_PAINT message to the window 
    // procedure. 
 
    ShowWindow(hwnd, nCmdShow); 
    UpdateWindow(hwnd); 
    return TRUE; 
 
} 


	ATOM Mark = ::RegisterClassEx()


}



void Initialize(v8::Local<v8::Object> exports){
	NODE_SET_METHOD(exports, "WindowsMark", WindowsMark);  //We're exporting our function to use in our JS program
}

NODE_MODULE(addon, Initialize)
