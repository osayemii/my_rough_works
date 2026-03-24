# Slot machine
import random

def spin_row():
    symbols = ['🍒', '🍉', '🔔', '🍋', '⭐']

    return [random.choice(symbols) for _ in range(3)]

def print_row(row):
    print("--------------")
    print(" | ".join(row))
    print("--------------")

def payout(row, bet):
    if row[0] == row[1] == row[2]:
        if row[0] == '🍒':
            return bet * 3
        elif row[0] == '🍉':
            return bet * 4
        elif row[0] == '🔔':
            return bet * 5
        elif row[0] == '🍋':
            return bet * 10
        elif row[0] == '⭐':
            return bet * 20
    return 0


def main():
    balance = 100

    print("-------------------------")
    print(" Welcome to python slots ")
    print("Symbols: 🍒 🍉 🔔 🍋 ⭐")
    print("-------------------------")

    while balance > 0:
        print(f"Current balance: \033[32m${balance}\033[0m")

        bet = input("Place your bet amount: ")

        if not bet.isdigit():
            print("\033[31mPlease enter a valid amount.\033[0m")
            continue

        bet = int(bet)

        if bet > balance:
            print("\033[33mInsufficient balance.\033[0m")
            continue

        if bet <= 0:
            print("\033[31mBet must be greater than zero.\033[0m")
            continue

        balance -= bet
        row = spin_row()
        print("Spinning...\n")
        print_row(row)

        win_amount = payout(row, bet)
        if win_amount > 0:
            balance += win_amount
            print(f"\033[32mYou win ${win_amount}!\033[0m")
        else:
            print("\033[31mNo win this time. Try again!\033[0m")

        play_again = input("Do you want to play again? (y/n): ").lower()

        if play_again != 'y':
            break

    print("--------------------------------------------------")
    print(f"Thank you for playing! Your final balance is: \033[34m${balance}\033[0m")
    print("--------------------------------------------------")
    

if __name__ == '__main__':
    main()