

#include <iostream>
using namespace std;

void getnumber(char *p,int length)
{
	int a[100],m,n,number,index=0;          
    
    for(m=0;m<length;m++)
    {
    	if(*(p+m)>='0'&&*(p+m)<='9')  //判断是否为数字
    	{
    	    number=*(p+m)-'0';
    	    for(n=m+1;n<=length;n++)
            {
    	if(*(p+n)>='0'&&*(p+n)<='9')//判断下一个是否为数字      {number=number*10+*(p+n)-'0';  m++;}
			  else  break;
		    }
			a[index]=number;	
			index++;
		}
	}
	cout<<"存放数字的数组为: "<<endl;
    for(int i=0;i<index;i++) {cout<<a[i]<<" ";}
}

int main()
{
	char x[100];
	int length;
	cout<<"请输入一个字符串："<<endl;
	cin>>x;
	cout<<endl;
	length=sizeof(x)-1;
	getnumber(x,length);
	
	return 0; 
}
