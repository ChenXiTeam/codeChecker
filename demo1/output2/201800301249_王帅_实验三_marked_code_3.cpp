

#include <iostream>
using namespace std;

void set_time(void);
void show_time(void);  //将方法提到外边作为函数
	
class Time
{
	public:  //将权限改为public

	int hour;
	int minute;
	int sec;
} ;
Time t;

int main()
{
	set_time();
	show_time();
	return 0;
}

void set_time(void)
{
	cin>>t.hour;
	cin>>t.minute;
	cin>>t.sec;
}

void show_time(void)  //修改返回值类型
{
	cout<<t.hour<<":"<<t.minute<<":"<<t.sec<<endl;
}
