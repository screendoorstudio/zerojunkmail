# Legislative Toolkit Downloads

This folder contains downloadable PDF documents for the Legislative Toolkit page at `/legislators`.

## Required PDF Files

Generate these PDFs from the Word documents in `/Policy-Regulatory/Word Docs/`:

| PDF Filename | Source Word Document |
|--------------|---------------------|
| `01_EDDM_Consumer_Choice_Act_Model_Bill.pdf` | `01_EDDM_Consumer_Choice_Act_Model_Bill.docx` |
| `02_Executive_Summary.pdf` | `02_Executive_Summary.docx` |
| `03_Section_by_Section_Analysis.pdf` | `03_Section_by_Section_Analysis.docx` |
| `04_One_Pager_Fact_Sheet.pdf` | `04_One_Pager_Fact_Sheet.docx` |
| `05_Talking_Points.pdf` | `05_Talking_Points.docx` |
| `06_FAQ_for_Legislators.pdf` | `06_FAQ_for_Legislators.docx` |
| `07_Industry_Counterarguments.pdf` | `07_Industry_Counterarguments.docx` |
| `08_Comparison_Tables.pdf` | `08_Comparison_Tables.docx` |

## How to Generate PDFs

### Option 1: Microsoft Word (macOS/Windows)
1. Open each `.docx` file in Microsoft Word
2. File → Export → Create PDF
3. Save with the corresponding PDF filename above
4. Place in this `/public/downloads/` folder

### Option 2: macOS Preview/Pages
1. Right-click the `.docx` file
2. Open With → Pages
3. File → Export to → PDF
4. Save with the corresponding PDF filename above

### Option 3: LibreOffice
1. Open the `.docx` file in LibreOffice Writer
2. File → Export as PDF
3. Click "Export"
4. Save with the corresponding PDF filename above

### Option 4: Google Docs
1. Upload `.docx` to Google Drive
2. Open with Google Docs
3. File → Download → PDF Document (.pdf)
4. Rename and place in this folder

## Verifying Downloads Work

After placing the PDFs in this folder:

1. Run the development server: `npm run dev`
2. Navigate to `/legislators`
3. Test each download button in the "Quick Downloads" and "Download All Materials" sections
4. Verify PDFs open correctly

## Source Files Location

Word documents are located at:
```
/Policy-Regulatory/Word Docs/
├── 01_EDDM_Consumer_Choice_Act_Model_Bill.docx
├── 02_Executive_Summary.docx
├── 03_Section_by_Section_Analysis.docx
├── 04_One_Pager_Fact_Sheet.docx
├── 05_Talking_Points.docx
├── 06_FAQ_for_Legislators.docx
├── 07_Industry_Counterarguments.docx
└── 08_Comparison_Tables.docx
```

---

Last updated: January 2025
