

#include <iostream>
using namespace std;

int main()
{
	double a1,a2,a3,a4,a5,a6,a7,a8;
	
	a1=3.5*3+2*7-'a';
	
	a2=26/3+34%3+2.5;
	
	a3=45/2+(int)3.14159/2;
	
	int a=3,b,c; 
	a4=a=b=(c=a+=6); 
	
	a=3*5,a=b=3*2,a5=a;
	
	a=3;
	a6=(int)(a+6.5)%2+(a=b=5);
	
	double x=2.5,y=4.7;
	a=7;
	a7=x+a%3*(int)(x+y) % 2 / 4;
	
    a=2,b=3,x=3.5,y=2.5;
	a8=(float)(a+b)/2+(int)x%(int)y;
	
	cout<<a1<<"\n"<<a2<<"\n"<<a3<<"\n"<<a4<<"\n"<<a5<<"\n"<<a6<<"\n"<<a7<<"\n"<<a8; 
	return 0;
}
