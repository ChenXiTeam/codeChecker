
class Shape{
	public:
		virtual void printArea(){};
};
class Circle:public Shape{
	private:
		double r;
	public:
		Circle(double radius){r=radius;}
		void printArea(){cout<<3.14*r*r<<endl;}
};
class Rectangle:public Shape{
	private:
		double l;
		double w;
	public:
		Rectangle(double length,double width){l=length;w=width;}
		void printArea(){cout<<l*w<<endl;}
};
class Triangle:public Shape{
	private:
		double h;
		double w;
	public:
		Triangle(double height,double width){h=height;w=width;}
		void printArea(){cout<<0.5*h*w<<endl;}
};
int main(){
	Circle c(3);
	Rectangle r(2,5);
	Triangle t(4,6);
	c.printArea();
	r.printArea();
	t.printArea();
}

