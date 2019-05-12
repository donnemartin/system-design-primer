#! /usr/bin/env sh

generate_with_solutions () {
  echo "Generating English with solutions"

  tmpfile=$(mktemp /tmp/abc-script.XXXXXX)

  cat ./README.md >> $tmpfile

  for dir in ./solutions/system_design/*; do 
    case $dir in *template*) continue;; esac
    case $dir in *__init__.py*) continue;; esac
    : [[ -d "$dir" ]] && ( cd "$dir" && cat ./README.md >> $tmpfile && echo "" >> $tmpfile )
  done

  cat $tmpfile | pandoc --metadata-file=epub-metadata.yaml --metadata=lang:en --from=markdown -o README.epub

  rm "$tmpfile"

  echo "Done! You can find the book at ./README.epub"
}

generate () {
  name=$1
  language=$2

  echo "Generating Ebook $name ..."

  pandoc \
    --metadata-file=epub-metadata.yaml \
    --metadata=lang:$language \
    -o $name.epub \
    $name.md

  echo "Done! You can find the book at ./$name.epub"
}

generate_with_solutions
generate README-ja ja
generate README-zh-Hans zh-Hans
generate README-zh-TW zh-TW
