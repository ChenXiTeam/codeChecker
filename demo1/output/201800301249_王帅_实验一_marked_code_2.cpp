

#include <iostream>
using namespace std;

int transform(char x)  //字母转化方法
{
    x=x+4;
    return x;
}

int main()
{
	char c1,c2,c3,c4,c5,d1,d2,d3,d4,d5;
	
	cin>>c1>>c2>>c3>>c4>>c5;
	
	d1=transform(c1);
	d2=transform(c2);
	d3=transform(c3);
	d4=transform(c4);
	d5=transform(c5);
	
	cout<<d1<<d2<<d3<<d4<<d5;
	
	return 0;
}	 
