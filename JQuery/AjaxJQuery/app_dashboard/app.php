<?php
    //Classe dashboard
    class Dashboard {
        private $data_inicio;
        private $data_fim;
        private $numeroVendas;
        private $totalVendas;

        public function __get($atr) {
            return $this->atr;
        }

        public function __set($atr, $valor) {
            $this->atr = $valor;
            return $this;
        }
    }
?>