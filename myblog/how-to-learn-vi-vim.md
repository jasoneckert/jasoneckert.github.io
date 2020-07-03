+++
title = "How to learn vi (vim)"
date = "2019-08-27"
tags = ["Linux","UNIX","programming","development"]
categories = ["blog"]
description = "vi (vim) is arguably the best text editor ever made. You should master it if you haven't done so already. To do that, start by reading this post."
+++

![vim](vim.png#center "vim")

# 1. So, what is vi (and vim)?

One of the most important tools for any developer or sysadmin on UNIX and Linux systems is a text editor. Mastering a text editor allows you to quickly create and edit the source code for programs, scripts and configuration files (nearly all configuration on a UNIX/Linux system is stored as text).

The vi editor has been one of the most common (if not THE most common) text editor on these systems since it was created in 1969 by Bill Joy. It was a visual extension to the 1969 ex line-based text editor used back when UNIX terminals looked like a printer with a keyboard, and you had to edit an existing text file using obscure commands (without seeing the actual file on your screen):

![Teletype](teletype.jpg#center "Teletype")

Then, Bram Moolenaar created a version of the vi editor with extended functionality in 1991 and called it vim (vi improved). Nearly all UNIX and Linux systems today use vim, but we still refer to it as vi (the vi executable is typically a shortcut to the vim executable). As a result, from this point on, I’ll just refer to it as vi.

# 2. Why should I learn vi? Isn’t it difficult to use?

![vim tweet](vimtweet.png#right "vim tweet")

For people who open vi for the first time, it may seem difficult since it doesn’t present visual cues on the screen that tell you how to use it.  Of course, this has led to a plethora of vi-related humor on the Internet:

But vi isn’t difficult to use at all. It merely has a small learning curve at the beginning. In short, it’s:
- Very fast for any purpose
- Easily addictive, with a 1 day learning curve (for the basics)
- Powerful (800+ built-in functions with plugins & customization ability)
- Found standard on nearly all UNIX flavors and Linux distributions
- A vi-able skill for any UNIX/Linux sysadmin, user or developer

As a quick note, the other powerful text editor for UNIX/Linux is Emacs, but it’s not nearly as fast as vi, and if you use it too much, you’ll end up with a LISP ;-)

# 3. How do I learn vi?

The quickest and easiest way to learn the vi editor is to first focus on essential vi functionality only (what I call the survival skills) using some sample text files, and then expand upon that functionality later on. 

# 4. Learning the survival skills

You can run the following commands to obtain some sample text files on your system, and edit the file called “letter” using the vi editor:

        git clone https://github.com/jasoneckert/classfiles.git
        cd classfiles
        vi letter

![vim2](vim2.jpg#right "vim2")

The cursor is automatically placed at the beginning of the file. The easiest way to navigate the file is to use the cursor (arrow) keys, or PageUp/PageDown. You’ll know when you reach the end of the file, because vi displays ~ (tilde) characters at the bottom. Before you edit or add text, you must first understand that vi has two modes. 

When you first open the vi editor, you are placed in COMMAND MODE, where every key and key combination on your keyboard represents a function (e.g. pressing the x key will delete the character your cursor is on). A handful of these functions take you to INSERT MODE, where the keys on your keyboard are actually used to type/edit text (e.g. pressing the x key will insert the letter x in your document).  To return back to COMMAND MODE after inserting/editing text, simply press the [Esc] key.

Common functions that allow you to enter INPUT MODE include:
- `a`    starts appending text after current character
- `i`    starts inserting text before current character
- `o`    opens a new line underneath the cursor to insert text
- `A`    starts appending text after current line
- `I`    starts inserting text at the beginning of the current line
- `O`    opens a new line above the cursor to insert text
- `c`    starts inserting text on the character that you are on
- `r`    replaces one character only

Common functions used when in COMMAND MODE:
- `yy`            yanks a line of text to the buffer
- `y3y` or `3yy`    yanks 3 lines of text to the buffer
- `y3w` or `3yw`       yanks 3 words of text to the buffer
- `p`             pastes the contents of the buffer below the current line
- `P`             pastes the contents of the buffer above the current line
- `dd`            deletes the current line
- `d3d` or `3dd`    deletes 3 lines
- `d5w` or `5dw`       delete 5 words
- `x`             deletes the current character
- `3x`            deletes 3 characters (starting with the current character)
- `J`             joins lines (join line below you to current line)
- `u`             undoes last change
- `[Ctrl]+g`      shows current line stats
- `:`             takes you to the interactive : prompt (called ex mode)
- `:wq`           saves and quits
- `:w lala`       saves as file lala
- `:q`            quits (if no changes were made)
- `:q!`           quits and throws away any changes
- `:set all`      shows all vi environment parameters
- `:set number`   sets auto line numbering
- `:set nonumber` unsets auto line numbering
- `ZZ`            saves and quits (same as :wq)

Spend some time practicing the functions in COMMAND MODE within the “letter” file, including the functions that take you to INSERT MODE.  Insert and delete as much text as you want. Then, hold down the u key in COMMAND MODE to undo all of your changes and use :q to quit the editor.  Next, type vi small_town (a joke file with a lot of typos) and use these same survival skills to fix all of the typos. This time, save your changes using :wq in COMMAND MODE.

# 5. I’ve mastered the survival skills. Now what?

There’s no shortage of things to do after mastering the survival skills. However, I’ve listed those that I find the most useful below, organized by area:

Navigation in COMMAND MODE (beyond the cursor keys and PageUp/PageDown):
- `h j k l`   are alternatives to the cursor keys for navigation
- `1G`        goes to line 1
- `23G`       goes to line 23
- `G`         goes to the last line
- `^`         goes to beginning of the current line
- `$`         goes to beginning of the current line
- `d$`        deletes from cursor to end of the current line
- `d^`        deletes from cursor to the beginning of the current line

Any set options in ex mode can be made permanent for all users by editing the /usr/share/vim/vimrc file, or for just your user account by creating a .vimrc or .exrc file in your home directory (e.g. vi ~/.vimrc). The most common options that I place in this file turn on line numbering (`number`), cursor position (`ruler`), highlighting of brackets (`showmatch`), tabs that are equivalent to 4 spaces (`ts=4` - the default is 8, which is too much), and programming language highlights (`syntax`):

        set number ruler showmatch ts=4
        syntax on

Useful functions in COMMAND MODE:

- `/Mother`   searches for Mother (n = next occurrence, N = previous occurrence)
- `?Mother`   does the same search, but in the reverse direction (earlier lines)
- `~`         switches case for current letter
- `gUU`       turns entire line to uppercase
- `ddp`       swaps current line with the next one
- `zf5j`      folds the next 5 lines (`zo` = open/expand, `zc` = close, `zd` = delete)

Useful commands in ex mode (the : prompt):
- `:% s/the/THE/g`     searches for the and replace with THE in the whole file
- `:1,7 s/the/THE/g`   same as previous, but only on lines 1 through 7
- `:ab LR Linux Rocks` when you type LR in INSERT MODE, replaces with Linux Rocks - this can be put into your .vimrc or .exrc file too!
- `:r proposal1`       inserts the contents of the proposal1 file under the current line
- `:r !date`           inserts the output of the date command under the current line
- `:help p`            displays help for functions that start with p
- `:help holy-grail`   displays help for all ex mode commands
- `:e proposal1`       edits a new file (proposal1) instead of current file
- `:split proposal1`   edits proposal1 in a new split screen (horizontal)
- `:vsplit proposal1`  edits proposal1 in a new split screen (vertical) - you can use `[Ctrl]+ww` to move between screens, or `[Ctrl]+w`, `_` to minimize current screen, or `[Ctrl]+w`, `=` to restore current screen to original size.
- `:tabe lala`         creates a new tab called lala
- `:tabs`              shows tabs
- `:tabn`              moves to next tab
- `:tabp`              moves to previous tab
- `:set rightleft`     a fun prank (especially if you put it in someone else’s .vimrc ;-)

# 6. Still want more?

Run the `vimtutor` command! This opens a lengthy interactive vi tutorial within vi itself.

If this command isn’t available on your Linux system, it’s because your Linux distribution installed the minimal vim package. Simply run `dnf install vim` or `apt install vim` (depending on your Linux distribution) to get the full vim package that includes the vim tutor! 
