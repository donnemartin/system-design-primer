#! /usr/bin/env sh

generate () {
  name=$1
  echo "Generating Ebook $name ..."
  pandoc -o $name.epub $name.md
  echo "Done! You can find the book at ./$name.epub"
}

generate README
generate README-ja
generate README-zh-Hans
generate README-zh-TW
