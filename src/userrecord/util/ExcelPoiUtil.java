package userrecord.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.ss.util.CellRangeAddress;

public class ExcelPoiUtil {
	private static Logger logger = Logger.getLogger(ExcelPoiUtil.class.getName());

	public static void main(String[] args) {
		// ExcelUtil.readExcel(file)
	}

	public static List<String[]> readExcelFromRow(int fromRowNum, File file) {
		List<String[]> list = new ArrayList<String[]>();
		FileInputStream fileInputStream = null;
		Workbook workbook = null;
		try {
			fileInputStream = new FileInputStream(file);
			workbook = WorkbookFactory.create(fileInputStream);
			// 得到工作表
			Sheet sheet = workbook.getSheetAt(0);
			for (int i = fromRowNum; i <= sheet.getLastRowNum(); i++) {
				Row row = sheet.getRow(i);
				if (row == null) {
					continue;
				}
				String[] ss = new String[row.getLastCellNum()];
				for (int j = 0; j < row.getLastCellNum(); j++) {
					Cell cell = row.getCell(j);
					if (cell == null) {
						continue;
					}
					String value;
					if (cell.getCellType() == CellType.BOOLEAN) {
						value = String.valueOf(cell.getBooleanCellValue());
					} else if (cell.getCellType() == CellType.NUMERIC) {
						DataFormatter dataFormatter = new DataFormatter();
						dataFormatter.addFormat("###########", null);
						value = dataFormatter.formatCellValue(row.getCell(j));
					} else {
						value = String.valueOf(cell.getStringCellValue());
					}
					ss[j] = value == null ? "" : value.trim();
				}
				boolean isempty = true;
				for (String string : ss) {
					if (string != null && !string.isEmpty()) {
						isempty = false;
						break;
					}
				}
				if (!isempty) {
					list.add(ss);
				}
			}
		} catch (EncryptedDocumentException | IOException e) {
			e.printStackTrace();
		} finally {
			try {
				workbook.close();
				fileInputStream.close();
			} catch (IOException e) {
				logger.log(Level.SEVERE, e.getMessage(), e);
			}
		}
		return list;
	}

	public static File createExcelTmpFile(String title, String[][] content) {
		content = content == null ? new String[0][0] : content;
		// 创建新工作簿
		Workbook workbook = new HSSFWorkbook();
		// 新建工作表
		Sheet sheet = workbook.createSheet("Sheet1");

		int titlerow = 0;
		// 设置Excel报表标题
		if (title != null) {
			// 创建行,行号作为参数传递给createRow()方法,第一行从0开始计算
			Row row = sheet.createRow(titlerow);
			Cell cell = row.createCell(0);
			cell.setCellValue(title);
			int col = 0;
			if (content.length > 0) {
				col = content[0].length;
			}
			sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, col));
			titlerow = 1;
		}

		for (int i = 0; i < content.length; i++) {
			Row row = sheet.createRow(titlerow);
			String[] lines = content[i];
			for (int j = 0; j < lines.length; j++) {
				Cell cell = row.createCell(j);
				cell.setCellValue(lines[j]);
			}
			titlerow++;
		}

		// 输出到磁盘中
		File outfile = null;
		FileOutputStream os = null;
		try {
			outfile = File.createTempFile("xlstem", ".xls");
			logger.info("生成excel内容文件" + outfile.getPath());
			if (content == null || content.length == 0) {
				return outfile;
			}
			os = new FileOutputStream(outfile);
			workbook.write(os);

		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				workbook.close();
				os.close();
			} catch (IOException e) {
				logger.log(Level.SEVERE, e.getMessage(), e);
			}
		}

		return outfile;
	}
}
