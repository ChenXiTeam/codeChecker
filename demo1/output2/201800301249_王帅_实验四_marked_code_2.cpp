

#include <iostream>
using namespace std;

class Complex
{
public:
	double real;
	double imag;
	Complex() {real=0; imag=0;}
	Complex(double r,double i) {real=r; imag=i;}
	void output() {cout<<real<<" + "<<imag<<"i"<<endl;}
	
	//在成员函数中包含重载类型转换运算符
	operator double(){return real;}
	
	//声明友元函数
	friend Complex operator-(Complex &a,Complex &b);
	friend ostream& operator<<(ostream&,Complex&);
	friend istream& operator>>(istream&,Complex&);
	
	//重载运算符"*","/"，运算符重载函数作为类的成员函数。
	Complex operator*(Complex &a)
	{
	    Complex n;
	    n.real=real*a.real-imag*a.imag;
	    n.imag=real*a.imag+imag*a.real;
	    return n; 
	}
	Complex operator/(Complex &a)
	{
		Complex n;
	    n.real=(real*a.real+imag*a.imag)/(a.real*a.real+a.imag*a.imag);
	    n.imag=(imag*a.real-real*a.imag)/(a.real*a.real+a.imag*a.imag);
	    return n;
	}
		
};

//重载运算符"+",将运算符函数重载为非成员、非友元的普通函数
Complex operator+(Complex &a,Complex &b)
{
	Complex n;
	n.real=a.real+b.real;
	n.imag=a.imag+b.imag;
	return n; 
}

//重载运算符"+"，参加运算的两个运算量有一个是类对象，有一个是整数，顺序任意
Complex operator+(Complex &a,int b)
{
	Complex n;
	n.real=a.real+b;
	n.imag=a.imag;
	return n; 
}
Complex operator+(int b,Complex &a)
{
	Complex n;
	n.real=a.real+b;
	n.imag=a.imag;
	return n; 
}

//处理一个复数与一个double数相加的运算(与复数的实部相加)
Complex operator+(Complex &a,double b)
{
	Complex n;
	n.real=a.real+b;
	n.imag=a.imag;
	return n;	
}

//重载运算符"-"，将运算符函数重载为类的友元函数
Complex operator-(Complex &a,Complex &b)
{
	Complex n;
	n.real=a.real-b.real;
	n.imag=a.imag-b.imag;
	return n; 	
}

//实现实部自增、自减（前置、后置）的运算
Complex operator++(Complex &a,int b)
{
	Complex n; 
	n.real=a.real++;
	n.imag=a.imag;
	return n;
} 
Complex operator++(Complex &a)
{
	Complex n; 
	n.real=a.real++;
	n.imag=a.imag;
	return n;
} 
Complex operator--(Complex &a,int b)
{
	Complex n; 
	n.real=a.real--;
	n.imag=a.imag;
	return n;
} 
Complex operator--(Complex &a)
{
	Complex n; 
	n.real=a.real--;
	n.imag=a.imag;
	return n;
} 

//重载流插入运算符"<<"和流提取运算符">>"，使之能用于复数的输入和输出
ostream& operator<<(ostream& a,Complex& b)
{
    a<<b.real<<" + "<<b.imag<<"i"<<endl;   
	return a;
}
istream& operator>>(istream& a,Complex& b)
{
    cout<<"请依次输入实部和虚部："<<endl; 
    a>>b.real>>b.imag;
    return a;
}

int main()
{
	Complex c1(4,5),c2(1,2.5),c3;
	int b=1;
	double d1;
	c3=c1+c2;   c3.output();  //验证复数加法 
	c3=c1-c2;   c3.output();  //验证复数减法
	c3=c1*c2;   c3.output();  //验证复数乘法
	c3=c1/c2;   c3.output();  //验证复数除法
	c3=c1+b;    c3.output();  //验证复数加整数 
	c3=b+c1;    c3.output();  //验证整数加复数 
	c1++;       c1.output();  //验证复数自加（后置） 
   	++c1;       c1.output();  //验证复数自加（前置） 
   	c1--;       c1.output();  //验证复数自减（后置） 
   	--c1;       c1.output();  //验证复数自减（前置）
    cout<<c1;                 //验证复数输出
	cin>>c3;                  //验证复数输入  
	cout<<"输入的复数为："<<c3;
	c3=c1+1.5;                //验证复数与double数相加 
	d1=double(c3);            
	cout<<"d1的值为："<<d1<<endl;   //输出d1的值 
} 
