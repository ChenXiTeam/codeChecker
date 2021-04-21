

#include <iostream>
using namespace std;

class Time
{
    private:  //将数据成员改为私有的
	int hour;
	int minute;
	int sec;
public:  //将输入和输出的功能改为由成员函数实现
    void set_time(void)
    {
	  cin>>hour;
	  cin>>minute;
	  cin>>sec; 
    }
    void show_time(void) //修改返回值类型
    {
	  cout<<hour<<":"<<minute<<":"<<sec<<endl;
    }
} ;
Time t;

int main()
{
	t.set_time();
	t.show_time();
	return 0;
}
