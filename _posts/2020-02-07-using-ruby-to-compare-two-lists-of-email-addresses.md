---
layout: post
title: Using Ruby to Compare Two Lists of Email Addresses
date: 2020-02-07 09:00:00 +10:00
tags: [scripting, ruby]
categories: blog
permalink: /:categories/:title/
---

I recently joined the committee of my son's daycare and have been helping out on the communications side of things. One of my first tasks was to add the new parents to our mailing list and remove folks who had left. This seemed easy enough until I realised that I'd need to manually compare two lists of around 100 emails to figure out who was new and who had left ... 😅

Since this is something I might need to do regularly, I thought I'd write up a little Ruby script to help out. I initially started with two loops comparing each line of a file with every line of the other. After looking for a more eloquent way to achieve this however, I found the `select` method does a much better job of finding multiple matches and makes for more readable code.

```ruby
def find_unique_emails(list_01, list_02)
  # given two email lists, find all emails
  # in list_01 that are not in list_02
  unique_emails = []

  list_01.each do |email|

    # Create an array of any matched emails
    matches = list_02.select { |line| line[/#{email.chomp}/i] }
    
    if matches.empty?
      # if no matches, it's a unique email
      puts email
      unique_emails.push(email)
    end
  end
  
  return unique_emails
end
```

I'm currently just printing out the lists in the terminal, but each list can be saved to a file if needed. I've made a gist of the full file [here](https://gist.github.com/aaronmoodie/b8e3b40c639b7ffb2c9af4e04e369edc). Happy diffing.