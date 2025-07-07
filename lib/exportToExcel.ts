import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export const exportToExcel = async (data: any[], filename = "report.xlsx") => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet 1");

  if (data.length > 0) {
    worksheet.columns = Object.keys(data[0]).map((key) => ({
      header: key,
      key: key,
      width: 20,
    }));

    data.forEach((item) => {
      worksheet.addRow(item);
    });
  }

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, filename);
};
