
# Abitrary Positional Argument
def score(*args):
    total = 0
    for age in args:
        total += age
    return total
# print(score(2,6,0,5,1))


# Abitrary Keyword Argument
def student(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")
# student(name="Daniel", age=20, position="A", title="Mr.")


# Positional Argument
def info(title, name, age):
    print(f"{title} {name} is {age} years old.")
    return info
# info("Mr.", "Daniel", 28)


# Keyword Argument
def info(title, name, age):
    print(f"{title} {name} is {age} years old.")
    return info
# info(age=50, title="Mrs.", name="Blessing")


# Default Argument
def info(title, age=0, name="John"):
    print(f"{title} {name} is {age} years old.")
    return info
# info("Mr")


# *args And **kwargs
def address(*args, **kwargs):
    for arg in args:
        print(arg, end=" ")
    print()

    # for key, value in kwargs.items():
    if "age" in kwargs:
        age = kwargs.get('age')
        print(f"He is {age} year old")
        # print(value, end=" ")
    else:
        print(kwargs, end=" ")

address(24, 3, 0,age=10, name="Daniel", strt="123 Fake Street")