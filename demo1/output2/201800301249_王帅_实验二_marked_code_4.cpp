

#include <iostream>
using namespace std; 

void copy(char *p,char *q,int m)
{
   p=p+m-1;
   while(*p!='\0' ) {*q++=*p++;}
   *q!='\0';
}

int main() 
{
	char a[30],b[30],*p,*q;
	int m;
	cout<<"请输入一个长度小于30的字符串：";
	cin>>a;
	cout<<"请输入m的值:";
	cin>>m;
	p=a;
	q=b;
	copy(p,q,m);
	cout<<b;

	return 0;
}
