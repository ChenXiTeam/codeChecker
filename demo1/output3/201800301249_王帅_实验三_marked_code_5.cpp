

#include <iostream>
using namespace std;

class cuboid
{
	int length;
	int width;
	int height;
	public:
	void input(void)
	{
		cout<<"请输入长方体的长：";  cin>>length;  
		cout<<"请输入长方体的宽：";  cin>>width;  
		cout<<"请输入长方体的高：";  cin>>height;
	}
	int calculate(int length, int width, int height)
	{
		int v = length*width*height;
		return v;
	}
	void output(void)
	{
cout<<"长方体的体积为："<<calculate(length, width,  height)<<endl;
	}
};

int main()
{
	cuboid c1,c2,c3;
	cout<<"第一个长方形："<<endl; 
	c1.input();
	c1.output();
	cout<<"第二个长方形："<<endl; 
	c2.input();
	c2.output();
	cout<<"第三个长方形："<<endl; 
	c3.input();
	c3.output();
}
