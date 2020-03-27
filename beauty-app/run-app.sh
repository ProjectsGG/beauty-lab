#!/bin/bash
echo -ne "\033]2;"beautylab-app"\007"
cd "`dirname "$0"`"
ionic serve