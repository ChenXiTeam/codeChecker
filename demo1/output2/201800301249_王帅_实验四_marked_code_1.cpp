

#include <iostream>
using namespace std;

class student
{
    public:
    student(int n, double s): idnumber(n), score(s){}
    int idnumber;
    double score;
};

//用来找最高分的方法bestStudent 
void bestStudent(student *p)
{
	student *best=p;
    for(int i=0;i<5;i++)  
	{
	  if((*p).score<(*(p+1)).score&&(*best).score<(*(p+1)).score) { best=(p+1);} 
	  p=(p+1); 
	}
    cout<<"最高成绩为："<<(*best).score<<endl<<"学生学号为："<<(*best).idnumber<<endl;
}

int main()
{
	//对象数组student放学生数据 
	student a[5]={
    student(11111,97),
    student(22222,92),
    student(33333,96),
    student(44444,94),
    student(55555,95)};
	
	//输出第1，3，5学生的数据
	student *p;
	for(int i=0;i<5;i=i+2)
	{	
	    p=&a[i];
		cout<<"第"<<i+1<<"个学生的学号和成绩："<<endl; 
		cout<<(*p).idnumber<<"  "<<(*p).score<<endl;
	} 
	cout<<endl;
    bestStudent(a);
    return 0;
}
