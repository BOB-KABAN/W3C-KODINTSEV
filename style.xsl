<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Алгоритмы машинного обучения</title>
                <style>
                    /* Основные стили */
                    body {
                        background: linear-gradient(to bottom, #f4f4f4, #05eeff);
                        font-family: "bender", sans-serif;
                        line-height: 1.6;
                    }

                    h1 {
                        color: #ffffff;
                        font-size: 3em;
                    }

                    h2 {
                        color: #00259e;
                        font-size: 2.5em;
                    }

                    button {
                        font-family: "bender", sans-serif;
                        background-color: rgba(255, 255, 255);
                        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
                        border-radius: 5px;
                        border: 1px dashed #00259e;
                        font-size: 16pt;
                    }

                    button:hover {
                        transform: scale(1.2);
                        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
                        transition: transform 0.3s ease;
                    }

                    ul {
                        color: #001aff;
                        list-style-type: square;
                        font-size: 1.5em;
                    }

                    /* Стили для таблицы */
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 20px 0;
                    }

                    caption {
                        text-align: center;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }

                    th, td {
                        border: 2px dashed #00259e;
                        padding: 12px;
                        text-align: left;
                    }

                    th {
                        background-color: #00259e;
                        color: #ffffff;
                        text-align: center;
                    }

                    tr:nth-child(even) {
                        background-color: lightblue;
                    }

                    tr:nth-child(odd) {
                        background-color: white;
                    }

                    td:first-child {
                        text-align: justify;
                    }

                    td:nth-child(2) {
                        text-align: center;
                    }

                    /* Дополнительные стили для hover */
                    th.sortable:hover {
                        background-color: #ddd;
                    }

                    /* Стиль для списка */
                    .highlight {
                        font-weight: bold;
                        background-color: yellow;
                    }

                    /* Фильтры и кнопки */
                    select {
                        font-size: 1em;
                        padding: 5px;
                        margin-bottom: 20px;
                    }
                </style>
                <script>
                    let currentSort = "ascending";

                    function sortTable() {
                        const rows = Array.from(document.querySelectorAll("table tbody tr"));
                        rows.sort((rowA, rowB) => {
                            const yearA = parseInt(rowA.cells[2].innerText);
                            const yearB = parseInt(rowB.cells[2].innerText);
                            return currentSort === "ascending" ? yearA - yearB : yearB - yearA;
                        });
                        currentSort = currentSort === "ascending" ? "descending" : "ascending";
                        const tbody = document.querySelector("table tbody");
                        tbody.innerHTML = "";
                        rows.forEach(row => tbody.appendChild(row));
                    }

                    function filterByApplication() {
                        const filterValue = document.getElementById("application").value;
                        const rows = Array.from(document.querySelectorAll("table tbody tr"));
                        rows.forEach(row => {
                            const application = row.cells[1].innerText;
                            if (application === filterValue || filterValue === "Все") {
                                row.style.display = "";
                            } else {
                                row.style.display = "none";
                            }
                        });
                    }

                    let listSortOrder = "ascending";
                    function sortList() {
                        const list = document.getElementById("algorithm-list");
                        const items = Array.from(list.getElementsByTagName("li"));
                        items.sort((a, b) => {
                            const textA = a.innerText.toLowerCase();
                            const textB = b.innerText.toLowerCase();
                            return listSortOrder === "ascending" ? textA.localeCompare(textB) : textB.localeCompare(textA);
                        });
                        list.innerHTML = "";
                        items.forEach(item => list.appendChild(item));
                        listSortOrder = listSortOrder === "ascending" ? "descending" : "ascending";
                    }
                </script>
            </head>
            <body>
                <h1>Алгоритмы машинного обучения</h1>

                <h2>Список алгоритмов</h2>
                <button onclick="sortList()">Сортировать список</button>
                <ul id="algorithm-list">
                    <xsl:for-each select="MachineLearning/Algorithm">
                        <li>
                            <xsl:value-of select="Name"/>
                        </li>
                    </xsl:for-each>
                </ul>

                <h2>Таблица алгоритмов</h2>
                <label for="application">Фильтр по области применения:</label>
                <select id="application" onchange="filterByApplication()">
                    <option value="Все">Все</option>
                    <xsl:for-each select="MachineLearning/Algorithm">
                        <xsl:if test="not(.=preceding::Algorithm[Application=current()/Application])">
                            <option>
                                <xsl:value-of select="Application"/>
                            </option>
                        </xsl:if>
                    </xsl:for-each>
                </select>
                <table>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Область применения</th>
                            <th class="sortable" onclick="sortTable()">Год</th>
                            <th>Разработчик</th>
                            <th>Сложность</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="MachineLearning/Algorithm">
                            <tr>
                                <td><xsl:value-of select="Name"/></td>
                                <td><xsl:value-of select="Application"/></td>
                                <td><xsl:value-of select="Year"/></td>
                                <td><xsl:value-of select="Developer"/></td>
                                <td><xsl:value-of select="Complexity"/></td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
