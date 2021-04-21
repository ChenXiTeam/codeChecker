

void transform(int *p)
{
    int t;
    t=*(p+1); *(p+1)=*(p+3); *(p+3)=t;//矩阵转置操作
    t=*(p+2); *(p+2)=*(p+6); *(p+6)=t;
    t=*(p+5); *(p+5)=*(p+7); *(p+7)=t;
}

int main()
{
	int a[9],i,r=0,*p; 
 
	cout<<"请输入矩阵元素："<<endl;  
 
	for(i=0;i<9;i++) {cin>>a[i];}
 
	cout<<"原矩阵："<<endl;  
 
    for(i=0;i<9;i++)
   {
    if(r%3==0&&r!=0) {cout<<endl;}	
    cout<<a[i]<<" ";
    r++;
   }
   cout<<endl;
 
	p=a;
	transform(p);
 
	cout<<"转制后矩阵："<<endl;
 
    for(i=0;i<9;i++)
   {
    if(r%3==0&&r!=9) {cout<<endl;}	
    cout<<a[i]<<" ";
    r++;
   }
 
	return 0;
}
