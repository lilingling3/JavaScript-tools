#!/bin/bash
NODEMOdulesPath="./file/"
echo "NODE_VERSION "$NODEMOdulesPath
if [ ! -d "$NODEMOdulesPath" ]; then
  echo "没有文件"
  exit 1
else
  echo "有文件"
fi