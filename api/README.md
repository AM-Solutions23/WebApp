# EmaLog API

<table>
    <thead>
        <th> Endpoint </th>
        <th> Method </th>
        <th> Route </th>
    </thead>
    <tbody>
        <tr>
            <td> empresa_controllers.login </td>
            <td> POST </td>
            <td> /login </td>
        </tr>
         <tr>
            <td> empresa_controllers.getAllEmpresas </td>
            <td> GET </td>
            <td> /empresa </td>
        </tr>
         <tr>
            <td> empresa_controllers.getOne </td>
            <td> GET </td>
            <td> /empresa/:empresa_id </td>
        </tr>
       <tr>
            <td> empresa_controllers.newEmpresa </td>
            <td> POST </td>
            <td> /empresa </td>
        </tr>
       <tr>
            <td> empresa_controllers.updateEmpresa </td>
            <td> PUT </td>
            <td> /empresa/:empresa_id </td>
        </tr>
       <tr>
            <td> empresa_controllers.deleteEmpresa </td>
            <td> DELETE </td>
            <td> /empresa/:empresa_id </td>
        </tr>
         <tr>
            <td> solicitacao_controllers.getAllSolicitacoes </td>
            <td> GET </td>
            <td> /solicitacao </td>
        </tr>
         <tr>
            <td> solicitacao_controllers.getOneSolicitacao </td>
            <td> GET </td>
            <td> /solicitacao/:solicitacao_id </td>
        </tr>
       <tr>
            <td> solicitacao_controllers.newSolicitacao </td>
            <td> POST </td>
            <td> /solicitacao </td>
        </tr>
       <tr>
            <td> solicitacao_controllers.updateSolicitacao </td>
            <td> PATCH </td>
            <td> /solicitacao/:solicitacao_id </td>
        </tr>
       <tr>
            <td> solicitacao_controllers.deleteSolicitacao </td>
            <td> DELETE </td>
            <td> /solicitacao/:solicitacao_id </td>
        </tr>
        <tr>
            <td> solicitacao_controllers.getAllSolicitacoesByStatus </td>
            <td> GET </td>
            <td> /solicitacao/status/:status </td>
        </tr>
        <tr>
            <td> solicitacao_controllers.estatisticasSolicitacoes </td>
            <td> GET </td>
            <td> /solicitacao-estatisticas </td>
        </tr>
        <tr>
            <td> auth_controller.validateToken </td>
            <td> POST </td>
            <td> /token-validation </td>
        </tr>
        <tr>
            <td> api_status_controller.apiStatus </td>
            <td> GET </td>
            <td> /api-status </td>
        </tr>
    </tbody>
</table>
