#! /bin/sh

# Install dependencies for successful PDF generations
tlmgr install collection-fontsrecommended ctex enumitem float greek-fontenc koma-script polyglossia realscripts xltxtra
fc-cache

# Generate PDFs using pandoc
for filename in pandoc-*yaml; do
  # Create variable for language based on filename
  language=`echo $filename | cut -d'.' -f1 | cut -d'-' -f2-3`

  # Attempt to create the PDF
  echo "Generating ${language} PDF with solutions..."
  pandoc -d ${filename}
  [[ $? -eq 0 ]] && echo "Success! The ${language} PDF has been successfully created!"
done
