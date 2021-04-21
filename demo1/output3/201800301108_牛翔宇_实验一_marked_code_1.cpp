
#include<iostream>
using namespace std;

int main(){
	//q1
	cout << 3.5 * 3 + 2 * 7 - 'a' << "\n";
	//q2
	cout << 26 / 3 + 34 % 3 + 2.5 << "\n"; 
	//q3
	cout << 45/2+(int)3.14159/2 << "\n";
	//q4
	int a = 3, b, c;
	a = b = (c = a += 6);
	cout << a << "\n";
	//q5
	a = 3 * 5;
	a = b = 3 * 2;
	cout << a << "\n";
	//q6
	a = 3;
	cout << (int)(a+6.5)%2+(a=b=5) << "\n";
	//q7
	int x = 2.5, y = 4.7;
	a = 7;
	cout << x+a%3*(int)(x+y)%2/4 << "\n";
	//q8
	a = 2;
	b = 3;
	x = 3.5;
	y = 2.5;
	cout << (float)(a+b)/2+(int)x%(int)y << "\n";
	
	return 0 ;
}
