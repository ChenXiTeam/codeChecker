

#include <iostream>
using namespace std;

//声明抽象基类Shape 
class Shape  
{  
public:  
    virtual double area()=0;             
}; 

//圆形派生类 
class Circle:public Shape
{
public:
	Circle(double r):radius(r){}  
    double area() {return radius*radius*3.14;}  
private:
    double radius;
}; 

//矩形派生类 
class Rectangle:public Shape
{
public:
	Rectangle(double l,double w):length(l),width(w){}
	double area() {return length*width;}
private:
    double length;
	double width;	
}; 

//三角形派生类 
class Triangle:public Shape
{
public:
    Triangle(double b,double h):base(b),height(h){}
	double area() {return 0.5*base*height;}
private:
    double base;
	double height;		
}; 

//用来输出面积的printArea函数 
void printArea(Shape &a) {cout<<a.area()<<endl;}

int main()
{
	Circle c(5);
	Rectangle r(1,2);
	Triangle t(3,5);
	cout<<"圆形的面积为："; 
	printArea(c);
	cout<<"矩形的面积为：";
	printArea(r);
	cout<<"三角形的面积为：";
	printArea(t);
	
	return 0;
}
