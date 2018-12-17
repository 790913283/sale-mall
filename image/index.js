//公用图片
const Common = {
  defaultIcon:'http://file.learningbee.net/plan/201811/27/247a9d19-e527-a1d3-69bc-d26e8c82f206.png',
  noData:'http://file.learningbee.net/plan/201811/27/32247c93-f26b-e116-432d-1243471f1e17.png',
  logo:'http://file.learningbee.net/plan/201811/28/85c4324a-55f5-68d2-9559-9317a8855283.png'
}

const Icon = {
  code:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQyMTgyODg5OTY5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY3MDgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2OCAxMjhIMTYwYy0xNy43IDAtMzIgMTQuMy0zMiAzMnYzMDhjMCA0LjQgMy42IDggOCA4aDMzMmM0LjQgMCA4LTMuNiA4LThWMTM2YzAtNC40LTMuNi04LTgtOHogbS01NiAyODRIMTkyVjE5MmgyMjB2MjIweiIgcC1pZD0iNjcwOSIgZmlsbD0iI2M2OTUzMCI+PC9wYXRoPjxwYXRoIGQ9Ik0yNzQgMzM4aDU2YzQuNCAwIDgtMy42IDgtOHYtNTZjMC00LjQtMy42LTgtOC04aC01NmMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOHpNNDY4IDU0OEgxMzZjLTQuNCAwLTggMy42LTggOHYzMDhjMCAxNy43IDE0LjMgMzIgMzIgMzJoMzA4YzQuNCAwIDgtMy42IDgtOFY1NTZjMC00LjQtMy42LTgtOC04eiBtLTU2IDI4NEgxOTJWNjEyaDIyMHYyMjB6IiBwLWlkPSI2NzEwIiBmaWxsPSIjYzY5NTMwIj48L3BhdGg+PHBhdGggZD0iTTI3NCA3NThoNTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThoLTU2Yy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4ek04NjQgMTI4SDU1NmMtNC40IDAtOCAzLjYtOCA4djMzMmMwIDQuNCAzLjYgOCA4IDhoMzMyYzQuNCAwIDgtMy42IDgtOFYxNjBjMC0xNy43LTE0LjMtMzItMzItMzJ6IG0tMzIgMjg0SDYxMlYxOTJoMjIwdjIyMHoiIHAtaWQ9IjY3MTEiIGZpbGw9IiNjNjk1MzAiPjwvcGF0aD48cGF0aCBkPSJNNjk0IDMzOGg1NmM0LjQgMCA4LTMuNiA4LTh2LTU2YzAtNC40LTMuNi04LTgtOGgtNTZjLTQuNCAwLTggMy42LTggOHY1NmMwIDQuNCAzLjYgOCA4IDh6TTg4OCA1NDhoLTQ4Yy00LjQgMC04IDMuNi04IDh2MTM0aC03OFY1NTZjMC00LjQtMy42LTgtOC04SDU1NmMtNC40IDAtOCAzLjYtOCA4djMzMmMwIDQuNCAzLjYgOCA4IDhoNDhjNC40IDAgOC0zLjYgOC04VjY0NGg3OHYxMDJjMCA0LjQgMy42IDggOCA4aDE5MGM0LjQgMCA4LTMuNiA4LThWNTU2YzAtNC40LTMuNi04LTgtOHoiIHAtaWQ9IjY3MTIiIGZpbGw9IiNjNjk1MzAiPjwvcGF0aD48cGF0aCBkPSJNNzQ2IDgzMmgtNDhjLTQuNCAwLTggMy42LTggOHY0OGMwIDQuNCAzLjYgOCA4IDhoNDhjNC40IDAgOC0zLjYgOC04di00OGMwLTQuNC0zLjYtOC04LTh6TTg4OCA4MzJoLTQ4Yy00LjQgMC04IDMuNi04IDh2NDhjMCA0LjQgMy42IDggOCA4aDQ4YzQuNCAwIDgtMy42IDgtOHYtNDhjMC00LjQtMy42LTgtOC04eiIgcC1pZD0iNjcxMyIgZmlsbD0iI2M2OTUzMCI+PC9wYXRoPjwvc3ZnPg=='//二维码
  ,calendar:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQxNjU1OTcyOTg5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY0MjciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg4MCAxODRINzEydi02NGMwLTQuNC0zLjYtOC04LThoLTU2Yy00LjQgMC04IDMuNi04IDh2NjRIMzg0di02NGMwLTQuNC0zLjYtOC04LThoLTU2Yy00LjQgMC04IDMuNi04IDh2NjRIMTQ0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnY2NjRjMCAxNy43IDE0LjMgMzIgMzIgMzJoNzM2YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjIxNmMwLTE3LjctMTQuMy0zMi0zMi0zMnogbS00MCA2NTZIMTg0VjQ2MGg2NTZ2Mzgwek0xODQgMzkyVjI1NmgxMjh2NDhjMCA0LjQgMy42IDggOCA4aDU2YzQuNCAwIDgtMy42IDgtOHYtNDhoMjU2djQ4YzAgNC40IDMuNiA4IDggOGg1NmM0LjQgMCA4LTMuNiA4LTh2LTQ4aDEyOHYxMzZIMTg0eiIgcC1pZD0iNjQyOCIgZmlsbD0iI2ZlY2QxYSI+PC9wYXRoPjwvc3ZnPg=='
  ,warn:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDguMDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNkODFlMDYiIGQ9Ik01MzMuMzMzMzMzIDE3MC42NjY2NjdMOTM4LjY2NjY2NyA4NTMuMzMzMzMzSDEyOGw0MDUuMzMzMzMzLTY4Mi42NjY2NjZ6TTIwNC44IDgxMC42NjY2NjdoNjYxLjMzMzMzM0w1MzMuMzMzMzMzIDI1NiAyMDQuOCA4MTAuNjY2NjY3eiBtMzA3LjItMzg0aDQyLjY2NjY2N3YyMTMuMzMzMzMzaC00Mi42NjY2Njd2LTIxMy4zMzMzMzN6IG0wIDI1Nmg0Mi42NjY2Njd2NDIuNjY2NjY2aC00Mi42NjY2Njd2LTQyLjY2NjY2NnoiICAvPjwvc3ZnPg=='
  ,down:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQzNTY4MzUwNzA0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc1MTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxNi4yNjY2NjcgODEwLjY2NjY2N0wzNDEuMzMzMzMzIDYzNS43MzMzMzNsNTEuMi01MS4yIDEyMy43MzMzMzQgMTIzLjczMzMzNFYxMjhINTk3LjMzMzMzM3Y3NjhsLTgxLjA2NjY2Ni04NS4zMzMzMzN6IiBmaWxsPSIjYmZiZmJmIiBwLWlkPSI3NTEzIj48L3BhdGg+PC9zdmc+'
  ,downActive:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQzNDczODA1NTEwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjgzNTAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTE2LjI2NjY2NyA4MTAuNjY2NjY3TDM0MS4zMzMzMzMgNjM1LjczMzMzM2w1MS4yLTUxLjIgMTIzLjczMzMzNCAxMjMuNzMzMzM0VjEyOEg1OTcuMzMzMzMzdjc2OGwtODEuMDY2NjY2LTg1LjMzMzMzM3oiIGZpbGw9IiNFOTgxMTIiIHAtaWQ9IjgzNTEiPjwvcGF0aD48L3N2Zz4='
  ,up:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQzNTY4NDQxODk3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjgxMjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwNy43MzMzMzMgMjE3LjZsMTc0LjkzMzMzNCAxNzAuNjY2NjY3LTUxLjIgNTEuMi0xMjMuNzMzMzM0LTEyMy43MzMzMzRWODk2SDQyNi42NjY2NjdWMTI4bDgxLjA2NjY2NiA4OS42eiIgZmlsbD0iI2JmYmZiZiIgcC1pZD0iODEyNCI+PC9wYXRoPjwvc3ZnPg=='
  ,upActive:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQzNDczODQ2MzExIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijg3MjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTA3LjczMzMzMyAyMTcuNmwxNzQuOTMzMzM0IDE3MC42NjY2NjctNTEuMiA1MS4yLTEyMy43MzMzMzQtMTIzLjczMzMzNFY4OTZINDI2LjY2NjY2N1YxMjhsODEuMDY2NjY2IDg5LjZ6IiBmaWxsPSIjRTk4MTEyIiBwLWlkPSI4NzIyIj48L3BhdGg+PC9zdmc+'
  ,low:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQzNDczMzU0OTIwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjgxMjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUzMy4zMzMzMzMgNTE2LjI2NjY2N2wtMTc0LjkzMzMzMy0xNzAuNjY2NjY3LTY0IDU5LjczMzMzMyAyMzQuNjY2NjY3IDIzNC42NjY2NjdMNzY4IDQwNS4zMzMzMzNsLTU5LjczMzMzMy01OS43MzMzMzMtMTc0LjkzMzMzNCAxNzAuNjY2NjY3eiIgZmlsbD0iIzJjMmMyYyIgcC1pZD0iODEyNCI+PC9wYXRoPjwvc3ZnPg=='
  ,search:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQ0NTA2NjA3Nzk1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM5MDgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAxMjhjMTQwLjggMCAyNTYgMTE1LjIgMjU2IDI1NlM1MjQuOCA2NDAgMzg0IDY0MCAxMjggNTI0LjggMTI4IDM4NHMxMTUuMi0yNTYgMjU2LTI1Nm0wLTY0QzIwNy4yIDY0IDY0IDIwNy4yIDY0IDM4NHMxNDMuMiAzMjAgMzIwIDMyMCAzMjAtMTQzLjIgMzIwLTMyMFM1NjAuOCA2NCAzODQgNjR6IG0yOTQuNCA1NjkuNmwtNDUuNiA0NS42IDI3MiAyNzIgNDUuNi00NS42LTI3Mi0yNzJ6IiBwLWlkPSIzOTA5Ij48L3BhdGg+PC9zdmc+'
  ,location:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQ0NTA2NTc3NjIyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM1ODUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk2MCA0ODBoLTY1LjZDODc5LjIgMjkzLjYgNzMwLjQgMTQ0LjggNTQ0IDEyOS42VjY0aC02NHY2NS42QzI5My42IDE0NC44IDE0NC44IDI5My42IDEyOS42IDQ4MEg2NHY2NGg2NS42YzE1LjIgMTg2LjQgMTY0IDMzNS4yIDM1MC40IDM1MC40djY1LjZoNjR2LTY1LjZjMTg2LjQtMTUuMiAzMzUuMi0xNjQgMzUwLjQtMzUwLjRoNjUuNnYtNjR6IG0tNDQ4IDM1MmMtMTc2LjggMC0zMjAtMTQzLjItMzIwLTMyMHMxNDMuMi0zMjAgMzIwLTMyMCAzMjAgMTQzLjIgMzIwIDMyMC0xNDMuMiAzMjAtMzIwIDMyMHogbTEyOC0zMjBjMCA3MC40LTU3LjYgMTI4LTEyOCAxMjhzLTEyOC01Ny42LTEyOC0xMjggNTcuNi0xMjggMTI4LTEyOCAxMjggNTcuNiAxMjggMTI4eiIgcC1pZD0iMzU4NiIgZmlsbD0iIzEzMjI3YSI+PC9wYXRoPjwvc3ZnPg=='
  ,close:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQ0NTE3NjI2NDU2IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQxMzUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgwNi40IDI2My4ybC00NS42LTQ1LjZMNTEyIDQ2Ny4yIDI2My4yIDIxNy42bC00NS42IDQ1LjZMNDY3LjIgNTEyIDIxNy42IDc2MC44bDQ1LjYgNDUuNkw1MTIgNTU3LjZsMjQ4LjggMjQ4LjggNDUuNi00NS42TDU1Ny42IDUxMnoiIHAtaWQ9IjQxMzYiIGZpbGw9IiM4YThhOGEiPjwvcGF0aD48L3N2Zz4='
  ,check:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQ0NTE4NzA0MDgyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNjIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIxOS45NTIgNTEyLjU3NmwyMTAuNDMyIDIxMC40MzItNDUuMjQ4IDQ1LjI1Ni0yMTAuNDMyLTIxMC40MzJ6IiBwLWlkPSI0MzYzIiBmaWxsPSIjMGZjYTcxIj48L3BhdGg+PHBhdGggZD0iTTc5OS42NzIgMjYyLjI2NGw0NS4yNTYgNDUuMjU2LTQ2MC40NjQgNDYwLjQ2NC00NS4yNTYtNDUuMjU2eiIgcC1pZD0iNDM2NCIgZmlsbD0iIzBmY2E3MSI+PC9wYXRoPjwvc3ZnPg=='
}
const Index = {
  indexTop:'http://file.learningbee.net/plan/201811/29/c09973ca-9387-891b-324e-cabd589522c6.png'
}

const Shop = {
  swipOne:'http://file.learningbee.net/plan/201811/28/e72a906e-dabc-8c5c-10a8-ab295e3a662e.png',
}

const Image = Object.assign(
  {},
  Common,
  Index,
  Shop,
  Icon
)
module.exports = Image
// module.exports = {}