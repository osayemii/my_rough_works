import random
import curses
import time

def matrix_random_char():
    return chr(random.randint(33, 126))  # Return a random ASCII character

def matrix_rain(stdscr):
    curses.start_color()  #  Initialize color support
    curses.use_default_colors()  # Use the terminal's default background color
    curses.init_pair(1, curses.COLOR_GREEN, curses.COLOR_BLACK)  # Green text on black background
    curses.curs_set(0)  # Hide the cursor
    stdscr.nodelay(True)  # Non-blocking input
    stdscr.timeout(50)  # Refresh every 50 milliseconds
    sh, sw = stdscr.getmaxyx()  # Get screen height and width
    columns = [random.randint(0, sh - 1) for _ in range(sw)]  # Initialize columns with random starting positions

    while True:
        if stdscr.getch() == ord('q'):
            break
        stdscr.clear()  # Clear the screen
        for i in range(sw):
            y = columns[i]
            x = i
            char = matrix_random_char() # Get a random character
            try:
                stdscr.addstr(y, x, char, curses.color_pair(1))  # Add character to the screen
            except curses.error:
                pass  # Ignore errors when writing outside the screen boundaries
            columns[i] += 1  # Move the column down

            if columns[i] >= sh:  # Reset the column to the top
                columns[i] = 0   # Start from the top again

        stdscr.refresh()  # Refresh the screen
        time.sleep(0.01)  # Sleep for a short time to control the speed of the rain

if __name__ == "__main__":
    curses.wrapper(matrix_rain)  # Start the matrix rain effect