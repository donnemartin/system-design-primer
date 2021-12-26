#! /bin/bash

# Generate PDFs using pandoc
generate_pdfs_with_solutions() {
  for filename in pandoc-*yaml; do
    # Create variable for language based on filename
    IFS=- read _ language <<< "${filename}"
    language=${language/.yaml/}

    # Attempt to create the PDF
    echo "Generating ${language} PDF with solutions..."
    pandoc -d ${filename}
    [[ $? -eq 0 ]] && echo "Success! The ${language} PDF has been successfully created!"
  done
}

# Check if dependencies exist
check_dependencies () {
  for dependency in "${dependencies[@]}"
  do
    if ! [ -x "$(command -v $dependency)" ]; then
      echo "Error: $dependency is not installed." >&2
      exit 1
    fi
  done
}

dependencies=("pandoc" "tex")

check_dependencies
generate_pdfs_with_solutions
