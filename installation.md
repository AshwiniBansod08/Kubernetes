'''
# Kubernetes
Launch instance and use below user data to setup eks cluster
-------------------------------------------------------------
````
#!/bin/bash

sudo apt update -y
sudo apt install -y curl unzip
````

# Install AWS CLI
-----------------
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

unzip awscliv2.zip

sudo ./aws/install

# Install kubectl
-------------------
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Install eksctl
-----------------
curl --silent --location \

"https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" \

| tar xz -C /tmp

sudo mv /tmp/eksctl /usr/local/bin

sudo chmod +x /usr/local/bin/eksctl

aws --version

kubectl version --client

eksctl version

----------------------------------------------------------------------------------------------------------------------


Configure AWS CLI
------------------
aws configure


Create Amazon EKS cluster using eksctl
--------------------------------------

eksctl create cluster --name cluster1 --region ap-southeast-1 --version 1.34 --nodegroup-name node1 --node-type t3.small --nodes 1


Log In Into EKS cluster
-----------------------
aws eks update-kubeconfig --name cluster1


Delete EKS Cluster
-------------------
eksctl delete cluster --name cluster1 --region ap-southeast-1


----------------------------------------------------------------------------------------------------------------------------------------------
KIND_CLUSTER
------------
(kind kind is a tool for running local Kubernetes clusters using Docker container “nodes”.
kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI.)

install docker first:
---------------------
sudo apt install docker.io -y


Create install_kind.sh:
------------------------
mkdir k8s-install

vim install_kind.sh

chmod +x install_kind.sh

./install_kind.sh

kind --version


install Kubernetes within docker:
--------------------------------
vim config.yaml


kind: Cluster

apiVersion: kind.x-k8s.io/v1alpha4

nodes:

- role: control-plane
  
  image: kindest/node:v1.30.0
  
- role: worker
  
  image: kindest/node:v1.30.0
  
- role: worker
  
  image: kindest/node:v1.30.0


Create a 3-node Kubernetes cluster using Kind:
---------------------------------------------
kind create cluster --config=config.yml --name=mycluster


Create install_kubectl.sh
--------------------------
vim install_kubectl.sh

#!/bin/bash

VERSION="v1.30.0"

URL="https://dl.k8s.io/release/${VERSION}/bin/linux/amd64/kubectl"

INSTALL_DIR="/usr/local/bin"

# Download and install kubectl

curl -LO "$URL"

chmod +x kubectl

sudo mv kubectl $INSTALL_DIR/

kubectl version --client

# Clean up

rm -f kubectl

echo "kubectl installation complete."

--------------------------------------------


chmod +x install_kubectl.sh

./install_kubectl.sh

kubectl get nodes

'''
