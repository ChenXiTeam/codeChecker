#include<iostream>
using namespace std;

void permutations(int a[] , int k , int m){//从k到m全排列 
	
	int i;
	
	if(k==m){//当k==m时，不需要再排，可以输出。 
		
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
		
		permutations(a,k+1,m);//先镶嵌到最后一层，然后i++来进行交换 
		
		swap(a[k],a[i]);//返回本层的原来结果	
		
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
 
