

#include <iostream>
using namespace std;

void sort1(int x, int y, int z)
{
	int t;
	if(x>y) {t=x;  x=y;  y=t;}
	if(x>z)	{t=x;  x=z;  z=t;}
	if(y>z) {t=y;  y=z;  z=t;}
	cout<<"传值排序后的三个数："<<x<<" "<<y<<" "<<z<<endl;
}

void sort2(int *px, int *py, int *pz)
{
	int t;
	if(*px>*py) {t=*px;  *px=*py;  *py=t;}
	if(*px>*pz) {t=*px;  *px=*pz;  *pz=t;}
	if(*py>*pz) {t=*py;  *py=*pz;  *pz=t;}
	cout<<"传指针排序后的三个数："<<*px<<" "<<*py<<" "<<*pz<<endl;
}

void sort3(int &x, int &y, int &z)
{
	int t;
	if(x>y) {t=x;  x=y;  y=t;}
	if(x>z)	{t=x;  x=z;  z=t;}
	if(y>z) {t=y;  y=z;  z=t;}
	cout<<"传引用排序后的三个数："<<x<<" "<<y<<" "<<z<<endl;
}

int main() 
{
	int x,y,z,x0,y0,z0;
	cout<<"请输入第一个数x：";
	cin>>x;
	cout<<"请输入第二个数y：";
	cin>>y;
	cout<<"请输入第三个数z：";
	cin>>z;
	cout<<"输入的三个数为: x="<<x<<" "<<"y="<<y<<" "<<"z="<<z<<endl;
	cout<<endl;
	x0=x;  y0=y;  z0=z;  //保存最初的三个数 
	
	sort1(x,y,z);
	cout<<"现在的x，y，z的值：x="<<x<<" "<<"y="<<y<<" "<<"z="<<z<<endl;
	cout<<endl;
	
	x=x0;  y=y0;  z=z0;  //保证将最初的三个数传给sort2 
	sort2(&x,&y,&z);
	cout<<"现在的x，y，z的值：x="<<x<<" "<<"y="<<y<<" "<<"z="<<z<<endl; 
	cout<<endl;  
	
	x=x0;  y=y0;  z=z0;  
	sort3(x,y,z);
	cout<<"现在的x，y，z的值：x="<<x<<" "<<"y="<<y<<" "<<"z="<<z<<endl;
}
