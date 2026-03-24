
balance = 0

def account_balance():
    print(f"Your account balance is:\033[92m ${balance:.2f}\033[0m\n")

def deposit():
    global balance
    amount = float(input("Enter the amount you wish to deposit: "))

    if amount > 0:
        balance += amount
        print("\033[92mDeposit Successful!\n \033[0m")
    else:
        print("\033[91mInvalid Input \033[0m")
        deposit()

def withdraw():
    global balance
    amount = float(input("Enter the amount you wish to withdraw: "))

    if amount > balance:
        print("\033[93mInsufficient Funds \033[0m")
    elif amount <= 0:
        print("\033[91mInvalid Input \033[0m")
        withdraw()
    else:
        balance -= amount
        print("\033[92mWithdrawal Successful!\n \033[0m")

def main():
    is_running = True

    while is_running:
        print("\033[94m*" * 20)
        print("  BANKING PROGRAM  ")
        print("*" * 20)
        print("1. Check account balance")
        print("2. Deposit")
        print("3. Withdraw")
        print("4. Exit\033[0m")

        choice = int(input("Enter a choice (1-4): "))

        match choice:
            case 1:
                account_balance()
            case 2:
                deposit()
            case 3:
                withdraw()
            case 4:
                print("\033[93mExiting the program...\033[0m")
                is_running = False
            case _:
                print("\033[91mInvalid Choice. Please try again.\033[0m")

if __name__ == "__main__":
    main()