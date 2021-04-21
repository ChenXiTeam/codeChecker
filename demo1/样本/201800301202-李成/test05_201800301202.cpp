#include<iostream>
#include<cmath>
using namespace std;

class treeNode{
	
	public:
	
	treeNode *leftNode,*rightNode;
	char element;
	treeNode(){
		
	leftNode = NULL;
	rightNode = NULL;
	element=NULL;	
	
	}
	treeNode(char a){
		
		leftNode = NULL;
		rightNode = NULL;
		element=a;	
	}
	
	treeNode(char a , treeNode left , treeNode right){
		
		*leftNode = left; 
		*rightNode = right;
		element = a;
		
	}
	
	treeNode& operator=(const treeNode &t ){
		
		this->element = t.element;
		
		this->leftNode = t.leftNode;
		
		this->rightNode = t.rightNode;	
		
		
	}
};
class queue{
	
	private:
		
	treeNode **q;
	
	int capacity;
	
	int begin;
	
	int end;
	
	public:
	
	queue(int n){
		
		q = new treeNode* [n];
		begin = 0;
		end = 0;
		
		capacity = n;
		
	}
	
	void push(treeNode *T){
	
		end = (end+1)%capacity;
		
		q[end] = T;
	
	}
	
	treeNode* read(){
	
		return q[(begin+1)%capacity];
		
	}
	
	void pop(){
	
		begin = (begin+1)%capacity;	
		
	}
	
	void del(){
		
		delete[] q;
	}
	
	
};

class binaryTree{
	
	public:
	int number=0;
	int height=0;
	treeNode* root = NULL;
	treeNode *p;
	int Middlei = 0;
	int Posti = 0;
	int count = 0;
	treeNode* p1;
	
	void bT(treeNode *a,char ch[],int n,int i){
		
		a->leftNode = new treeNode(ch[2*i+1]);
		
		a->rightNode = new treeNode(ch[2*i+2]);
		
	}

	binaryTree(char ch[],int n){
	
		number = n;
		height = log(n+1)/log(2);
			
		queue q(n+1);
		
		root = new treeNode(ch[0]);
		
		q.push(root);
			
		for(int i = 0 ; i<n/2 ; i++){
			
			p = q.read();
			
			bT(p,ch,n,i);		
			
			q.pop();
			
			q.push(p->leftNode);
			q.push(p->rightNode);
			}
			
			q.del();
		
		}
			
	binaryTree(char ch1[],char ch2[],int n) {
	 
		int x = 0;
		
		int count = 1;
		
		while(ch1[x]!=ch2[0]){
				
			if(x==0){
			
			this->root = new treeNode(ch1[0]);
	
			p1 = root;
			
			}
			else{
				
			p1->leftNode = new treeNode(ch1[x]);
			
			p1 = p1->leftNode;
				
			}
			
			x++;
			
		}

		if(x==0){
				
				this->root = new treeNode(ch1[x]);
			}
			else{
				
			p1->leftNode = new treeNode(ch1[x]);
			
			p1 = p1->leftNode;
					
			}
				
		x++; 
		
		int z = x;
		
		while(count < n&&ch1[0]!=ch2[count]){
			
			int y =0;
			treeNode *p2;
			p2 = root;
			
			
			while(y<x&&ch1[y]!=ch2[count]){
					
				p2 = p2->leftNode;
				y++;
				
			}
			
			if(y<x&&ch1[y]==ch2[count]){
				
			p2->rightNode = new treeNode(ch2[count+1]);
		
			z++;
				
			}
			
			count++;
		}
		
		int a = z;
		
		if(n-z>0){
			
			char cha1[n-z],cha2[n-z];
			
			for(int i = 0; i < n-z ; i++){
				
				cha1[i] = ch1[z];
				
				cha2[i] = ch2[z];
				
				z++;
				
			}
			
			binaryTree T(cha1,cha2,n-a);
			
			root->rightNode = T.root;
			
		}
		
	}
	
	void PreRead(treeNode *a){
		
		if(a->leftNode!=NULL){
	
			cout<<","<<a->leftNode->element;
	
			PreRead(a->leftNode);
			
		}
		if(a->rightNode!=NULL){
			
			cout<<","<<a->rightNode->element;
			 
			PreRead(a->rightNode);		
		}
	}
	
	void preRead(){
		
		cout<<root->element;
		
		PreRead(root);
		
	}
	
	void MiddleRead(treeNode *a){
		
		if(a->leftNode!=NULL){
			
			MiddleRead(a->leftNode);
			
			cout<<","<<a->element;
			
			MiddleRead(a->rightNode);
			
		}
		else{
			
		if(Middlei == 0){
			
		cout<<a->element;
		
		Middlei++;	
		}
		else
		
		cout<<","<<a->element;
		
		}
	}
	
	void middleRead(){
		cout<<endl;
		MiddleRead(root);
		
	}
	
	void PostRead(treeNode *a){
	
		if(a->leftNode!=NULL){
			
			PostRead(a->leftNode);
			
			if(a->rightNode!=NULL)
			PostRead(a->rightNode);
			cout<<","<<a->element; 
			
		}
		
		else{
	
			if(Posti==0){
		
			cout<<a->element;
			Posti++;
		
		}else{
		
			
		cout<<","<<a->element;
				
		}
	}
	}
	
	void postRead(){
	
		cout<<endl;	
		PostRead(root);
		
	}
	
	int getNumber(){
		
		return number;
		
	}
	
	int getHeight(){
		
		return height;
		
	}

	void LevelRead(treeNode *a){
		
		if(a->leftNode!=NULL)
			cout<<","<<a->leftNode->element;		
		if(a->rightNode!=NULL)
			cout<<","<<a->rightNode->element;
		if(a->leftNode!=NULL)
			LevelRead(a->leftNode);
		if(a->rightNode!=NULL)
			LevelRead(a->rightNode);
		
	}

	void levelRead(){
		
		cout<<root->element;
		
		LevelRead(root);
		
	}
	
}; 

int main(){

	char ch[20];
	
	int num = 0;

	for(int i = 0 ; i < 20 ; i++) {
		
		ch[i] = NULL;
	}
	
	cout<<"Input1"<<endl;
	
	cin>>ch;
	
	cout<<"Output1"<<endl;
	
	while(ch[num]!=NULL){
		
		num++;
		
	}
	binaryTree T(ch,num);
	
	T.preRead();
	T.middleRead();
	T.postRead();
	
	cout<<endl;
	cout<<T.getNumber()<<endl;
	cout<<T.getHeight()<<endl;

	char ch1[20],ch2[20];
	
	cout<<"Input2"<<endl;
	cin>>ch1;
	cin>>ch2;
	
	int k = 0;
	
	for(;ch1[k]!=NULL;k++);
	cout<<"Output2";
	
	binaryTree Te(ch1,ch2,k);
	
	Te.postRead();
	cout<<endl;
	Te.levelRead();
	cout<<endl;
	cout<<"End";
	
	return 0; 
}

