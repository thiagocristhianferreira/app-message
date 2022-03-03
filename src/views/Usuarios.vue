<template>
    <body>
        <h1>Usuários Cadastrados</h1>
        <section class="w-75 p-3 mx-auto">
            BARRA DE PESQUISA AQUI!!!
        </section>
        <div class="w-75 p-3 mx-auto">
            <b-table-simple
                hover
                small
                caption-top
                responsive
            >
                <b-thead>
                    <b-tr>
                        <b-th>ID</b-th>
                        <b-th>Nome</b-th>
                        <b-th>E-mail</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr>
                        <b-th>01</b-th>
                        <b-th v-b-modal.modal-1>{{this.nome}}</b-th>
                        <b-td v-b-modal.modal-2>{{this.e_mail}}</b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
        </div>
        <!-- <button @click="logNome()">logNome</button>
        <button @click="logMail()">logMail</button> -->
        <div>
            <b-modal id="modal-1" title="Nome">
                <b-input
                    id="edit-input-nome"
                    v-model="nome"
                    placeholder="Enter your name"
                    name="nome"
                    required
                />
            </b-modal>
            <b-modal id="modal-2" title="E-mail">
                <b-input
                    id="edit-input-email"
                    v-model="e_mail"
                    placeholder="Enter your e-mail"
                    name="email"
                    required
                />
            </b-modal>
        </div>
    </body>
</template>

<style scoped>
    body div {
        background-color: rgb(179, 179, 179);
    }
</style>

<script>
export default ({
  data() {
    return {
      e_mail: 'teste@teste.com',
      nome: 'Fulano da Silva',
    };
  },
//   methods: {
//     logNome() {
//       console.log(this.nome);
//     },
//     logMail() {
//       console.log(this.e_mail);
//     },
//   },
});
</script>
