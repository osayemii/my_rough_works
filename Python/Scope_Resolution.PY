from math import e # Built-in
from guardClause import *

# Scope Resolution
# Local -> Enclosed -> Global -> Built-in

# Local
def local1():
    x=2
    print(x)

def local2():
    x=1
    print(x)

local1()
local2()
# --------------------------

# Enclosed
def enclosed1():
    x=3
    def enclosed2():
        print(x)
    enclosed2()
enclosed1()

# Global
x=4
def global1():
    print(x)

def global2():
    print(x)

global1()
global2()

# Built-in
def builtIn():
    print(e)

e=5 # Global Variable
builtIn()