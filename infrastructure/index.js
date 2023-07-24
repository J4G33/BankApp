const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");

// Get the most recent Ubuntu AMI
const ubuntu = aws.ec2.getAmi({
    mostRecent: true,
    filters: [
        {
            name: "name",
            values: ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"],
        },
        {
            name: "virtualization-type",
            values: ["hvm"],
        },
    ],
    owners: ["099720109477"],
});

const sg = new aws.ec2.SecurityGroup("node-sg", {
    description: "Enable HTTP access",
    ingress: [
        { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
        { protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] },
        { protocol: "tcp", fromPort: 443, toPort: 443, cidrBlocks: ["0.0.0.0/0"] },
        { protocol: "tcp", fromPort: 3000, toPort: 3000, cidrBlocks: ["0.0.0.0/0"] }
    ],
    egress: [
        { protocol: "-1", fromPort: 0, toPort: 0, cidrBlocks: ["0.0.0.0/0"] },
    ],
});

// Create an EC2 instance
const instance = new aws.ec2.Instance("node-instance", {
    instanceType: "t2.micro",
    securityGroups: [sg.name],
    ami: ubuntu.then(ubuntu => ubuntu.id),
    userData: `#!/bin/bash
    sudo apt-get update -y
    sudo apt-get install -y docker.io
    sudo systemctl start docker
    sudo systemctl enable docker
    sudo docker run -p 80:80 --name playbank -d j23916garcia/playbank`,
    tags: {
        Name: "playbank",
    },
});

// Export the instance's public IP address
exports.publicIp = instance.publicIp;

// Export the instance's public DNS name
exports.publicDns = instance.publicDns;
