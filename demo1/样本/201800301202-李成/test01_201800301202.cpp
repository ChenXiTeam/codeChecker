#include<iostream>
using namespace std;

void permutations(int a[] , int k , int m){//��k��mȫ���� 
	
	int i;
	
	if(k==m){//��k==mʱ������Ҫ���ţ���������� 
		
		for(int j = 0 ; j <= m; j++){
			
			if(j!=m)
			cout<<a[j]<<",";
		
			if(j==m)
			cout<<a[j]<<endl;
		}
		
	} 
		
	else //k != m 
		
	for(i = k ; i <= m ; i ++){
		
		swap(a[k],a[i]);
		
		permutations(a,k+1,m);//����Ƕ�����һ�㣬Ȼ��i++�����н��� 
		
		swap(a[k],a[i]);//���ر����ԭ�����	
		
	}	
}

int main(){
	
	int number[20];
	
	int entery,i=0;
	
	cout<<"Input"<<endl; 
	
	cin>>entery;
	
	while(entery > 0 && i<=19){

		number[i] = entery;
		
		cin>>entery;
		
		i++;
		
	}
	
	cout<<"Output"<<endl;
	
	permutations(number,0,i-1);
	
	cout<<"end"<<endl;
	
}
 
