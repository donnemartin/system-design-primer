#!/usr/bin/env bash

generate_from_stdin() {
  outfile="$1"
  language="$2"
  
  echo "Generating '$language' ..."
  
  pandoc --metadata-file=epub-metadata.yaml --metadata=lang:"$2" --from=markdown -o "$1"
  
  echo "Done! You can find the '$language' book at ./$outfile"
}

generate_with_solutions() {
  tmpfile=$(mktemp /tmp/sytem-design-primer-epub-generator.XXX)
  
  {
    cat ./README.md
    
    for dir in ./solutions/system_design/*; do
      case $dir in *template*|*__init__.py*) continue;; esac
      [[ -d "$dir" ]] && ( cd "$dir" && cat ./README.md && echo "" )
    done
  } >> "$tmpfile"
  
  generate_from_stdin 'README.epub' 'en' < "$tmpfile"
  rm "$tmpfile"
}

generate() {
  name="$1"
  language="$2"
  
  generate_from_stdin "$name.epub" "$language" < "$name.md"
}

# Check if dependencies exist
check_dependencies() {
  for dependency in "${dependencies[@]}"; do
    command -v "$dependency" >/dev/null 2>&1 || {
      echo "Error: $dependency is not installed." >&2
      exit 1
    }
  done
}

dependencies=("pandoc")
check_dependencies

generate_with_solutions
generate README-ja ja
generate README-zh-Hans zh-Hans
generate README-zh-TW zh-TW
