import tkinter as tk
import sys

MATERIAIS = [
            "Plástico", "Metal", "YOK", "Acrílico",
            "Vidro", "Cabos", "Borracha", "Fonte", "Tubo",
            "Alumínio", "Placa", "Lâmpada", "Valor final",
            ]

BASES = [
    "GEA",
    "CEMPRE",
    "Nenhum",
    ]

class Equipamento:

    def __init__(self, *args):
        (
        self.nome,
        self.modelo,
        self.marca,
        self.tempo,

        self.m_plastico,
        self.p_plastico,

        self.m_vidro,
        self.p_vidro,

        self.m_aluminio,
        self.p_aluminio,

        self.m_metal,
        self.p_metal,

        self.m_cabos,
        self.p_cabos,

        self.m_fonte,
        self.p_fonte,

        self.m_placa,
        self.p_placa,

        self.m_yok,
        self.p_yok,

        self.m_borracha,
        self.p_borracha,

        self.m_lampada,
        self.p_lampada,

        self.m_acrilico,
        self.p_acrilico
        ) = args;

def _atoi(X):
    for x in X:
        try:
            yield float(x.replace(',', '.'))
        except:
            if x:
                yield x
            else:
                yield None

def atoi(X):
    return list(_atoi(X))

with open('dados.tsv', 'r') as file:
    S = file.read()
    X = S.split('\n')
    print(X)
    E = [atoi(x.split('\t')) for x in X if x]

eqs = [Equipamento(*args) for args in E]


EQUIPAMENTOS = [e.nome for e in eqs]

def reshape(X, max_cols):
    Y = [[]]
    y = Y[-1]
    for x in X:
        if len(y) < max_cols:
            y.append(x)
        else:
            y = [x]
            Y.append(y)
    return Y

class Janela:

    def __init__(self, root):
        root.title('Tabela de balanço de massa')

        self.cell_1 = tk.Frame(root)
        self.cell_1.pack(side=tk.TOP)

        ## EQUIP
        self.cell_11 = tk.Frame(self.cell_1)
        self.cell_11.pack(side=tk.LEFT)
        
        self.equip = tk.LabelFrame(self.cell_11, text="Equipamentos")
        self.equip.pack(side=tk.LEFT)

        self.equip_list = EQUIPAMENTOS

        self.equip_var = {}

        for row in range(len(self.equip_list)):
            eq = self.equip_list[row]
            self.equip_var[eq] = tk.BooleanVar(self.equip, False)
            btn = tk.Radiobutton(self.equip, variable=self.equip_var[eq])
            lbl = tk.Label(self.equip, text=eq)
            lbl.grid(row=row, column=1)
            btn.grid(row=row, column=0)

        ## --------------------------- ##

        self.cell_12 = tk.Frame(self.cell_1)
        self.cell_12.pack(side=tk.RIGHT)

        self.cell_121 = tk.Frame(self.cell_12)
        self.cell_121.pack(side=tk.TOP)
        
        ## QUANT
        self.quant = tk.LabelFrame(self.cell_121, text="Quantidade")
        self.quant.pack(side=tk.LEFT)

        self.quant_lbl = tk.Label(self.quant, text="Quantidade")
        self.quant_lbl.pack(side=tk.LEFT)

        self.quant_ent = tk.Entry(self.quant)
        self.quant_ent.pack(side=tk.RIGHT)

        ## TEMPO
        self.tempo = tk.LabelFrame(self.cell_121, text="Tempo médio de desmontagem")
        self.tempo.pack(side=tk.LEFT)

        self.tempo_ent = tk.Entry(self.tempo)
        self.tempo_ent.pack(side=tk.LEFT)

        self.tempo_lbl = tk.Label(self.tempo, text="Minutos")
        self.tempo_lbl.pack(side=tk.RIGHT)


        self.cell_122 = tk.Frame(self.cell_12)
        self.cell_122.pack(side=tk.BOTTOM)

        ## BASE

        self.base = tk.LabelFrame(self.cell_121, text="Base de Preços")
        self.base.pack(side=tk.LEFT)

        self.base_str = tk.StringVar(self.base, "Nenhum")

        self.base_menu = tk.OptionMenu(self.base, self.base_str, *BASES)
        self.base_menu.pack()

        ## VALOR

        self.valor = tk.LabelFrame(self.cell_122, text="Valor")
        self.valor.pack()

        self.valor_list = reshape(MATERIAIS, 4)

        for i in range(len(self.valor_list)):
            for j in range(len(self.valor_list[i])):
                lbl = tk.Label(self.valor, text=self.valor_list[i][j])
                ent = tk.Entry(self.valor)

                lbl.grid(row=i, column=2*j)
                ent.grid(row=i, column=2*j+1)
                    

        ## ------------------------------- ##

        self.cell_2 = tk.Frame(root)
        self.cell_2.pack(side=tk.BOTTOM)
        
        self.mass = tk.LabelFrame(self.cell_2, text="Massa & Porcentagem")
        self.mass.pack()

        self.mass_list = reshape(MATERIAIS, 5)

        for i in range(len(self.valor_list)):
            for j in range(len(self.valor_list[i])):
                frm = tk.LabelFrame(self.mass, text=self.valor_list[i][j])
                frm.grid(row=i, column=j)

                mas_ent = tk.Entry(frm)
                mas_ent.grid(row=0, column=0)
                mas_lbl = tk.Label(frm, text="g")
                mas_lbl.grid(row=0, column=1)

                prc_ent = tk.Entry(frm)
                prc_ent.grid(row=1, column=0)
                prc_lbl = tk.Label(frm, text="%")
                prc_lbl.grid(row=1, column=1)


if __name__ == '__main__':
    root = tk.Tk()
    self = Janela(root)
    root.mainloop()
