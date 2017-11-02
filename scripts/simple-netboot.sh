#!/bin/sh
kvm -m 2G -netdev user,id=somenet,bootfile=http://192.168.1.10:3000/bootscript,net=10.0.2.0/24,dhcpstart=10.0.2.5 -device e1000,netdev=somenet
